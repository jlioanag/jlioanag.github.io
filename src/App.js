import './App.css';

function App() {
  return (
    <div>
      <div class="py-2 bg-metal">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <img class="object-scale-down" alt="julian lioanag" src={require("./logo.png")}></img>
        </div>
      </div>
      
      <div class="py-2 bg-metal">
        <div class="items-center h-12 space-x-5 space-y-2 text-center">
          <button class="bg-white hover:bg-silver text-metal font-bold py-2 px-4 inline-flex items-center">
            <span><a href="https://jlioanag.github.io/resume.pdf">/resume</a></span>
          </button>
          <button class="bg-white hover:bg-silver text-metal font-bold py-2 px-4 inline-flex items-center">
            <span><a href="https://github.com/jlioanag">/github</a></span>
          </button>
          <button class="bg-white hover:bg-silver text-metal font-bold py-2 px-4 inline-flex items-center">
            <span><a href="https://www.linkedin.com/in/jlioanag/">/linkedin</a></span>
          </button>
          <button class="bg-white hover:bg-silver text-metal font-bold py-2 px-4 inline-flex items-center">
            <span><a href="https://soundcloud.com/jalgernon">/jalgernon</a></span>
          </button>
        </div>
      </div>

      <div class="py-8 bg-metal">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <p class="mt-2 text-xl leading-8 font-bold tracking-tight text-white sm:text-2xl">
              About Me
            </p>
          </div>
          <p class="mt-4 max-w-2xl text-m text-silver lg:mx-auto">
            I'm Julian, a Computer Science student currently living in Troy, New York. I love brainstorming <a class="bg-white hover:bg-silver hover:text-l-purple text-metal font-semibold" href="https://github.com/jlioanag/wav-art">random coding ideas</a> and have contributed to several <a class="bg-white hover:bg-silver hover:text-l-purple text-metal font-semibold" href="https://github.com/sirmammingtonham/smartrider">on-campus projects.</a> <i>More information can be found on my resume and Github!</i>
          </p>
          <p class="mt-4 max-w-2xl text-m text-silver lg:mx-auto">
            Aside from school and coding, I also enjoy listening, crate digging, and creating music. I play drums, guitar, and bass guitar, and have taken music theory courses. <i>You can find what I've been listening to recently</i> <a class="bg-white hover:bg-silver hover:text-l-purple text-metal font-semibold" href="https://rateyourmusic.com/~jthemage">here.</a>
          </p>
          <p class="mt-4 max-w-2xl text-m text-silver lg:mx-auto">
            Other interests include: cooking, photography, and custom keyboards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
