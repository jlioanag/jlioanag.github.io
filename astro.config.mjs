// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jlioanag.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), icon()],
});
