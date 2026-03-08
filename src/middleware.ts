import { defineMiddleware } from "astro:middleware";

type SuspendedChunk = [id: number, chunk: string];

export const onRequest = defineMiddleware(async (ctx, next) => {
  const pending: Set<Promise<string>> = new Set();
  ctx.locals.suspend = (promise: Promise<string>) => {
    const id = pending.size;
    pending.add(promise);
    promise.then((chunk) => {
      pending.delete(promise);
      streamController.enqueue([id, chunk]);
      if (pending.size === 0) {
        streamController.close();
      }
    });
    return id;
  };

  let streamController: ReadableStreamDefaultController<SuspendedChunk>;
  const stream = new ReadableStream({
    start(controller) {
      streamController = controller;
    },
  });

  const res = await next();

  // ignore non-HTML responses
  if (!res.headers.get("content-type")?.includes("text/html")) {
    return res;
  }

  async function* render() {
    for await (const chunk of res.body) {
      yield chunk;
    }

    for await (const [id, chunk] of stream) {
      yield `<template data-suspense="${id}">${chunk}</template>
      <script>
      (() => {
        const template = document.querySelector('template[data-suspense="${id}"]');
        const fallback = document.querySelector('[data-fallback="${id}"]');
        if (template && fallback) {
          fallback.replaceWith(template.content.cloneNode(true));
        }
      })();
      </script>`;
    }
  }

  return new Response(render(), { headers: res.headers });
});
