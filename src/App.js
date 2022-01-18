import './App.css';

function App() {
  return (
    <div>
      <div class="py-2 bg-metal">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <img class="object-scale-down" alt="julian lioanag" src={require("./logo.png")}></img>
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
            I'm Julian, a student in Computer Science currently in Troy, New York. I love brainstorming random coding ideas and have contributed to several on-campus projects. <i>More information can be found further down!</i>
          </p>
          <p class="mt-4 max-w-2xl text-m text-silver lg:mx-auto">
            Aside from school and coding, I also enjoy listening, collecting, and creating music. I play drums, guitar, and bass guitar, and have taken music theory courses. <i>You can find what I've been listening to recently here.</i>
          </p>
          <p class="mt-4 max-w-2xl text-m text-silver lg:mx-auto">
            Other interests include: cooking, eating, and photography.
          </p>
        </div>
      </div>

      <div class="py-12 bg-metal">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mt-1">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  {/* <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div> */}
                  <p class="ml-16 text-lg leading-6 font-medium text-white">Education</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-silver">
                  B.S. in Computer Science (2022) and M.S. in Information Technology (2023) at Rensselaer Polytechnic Institute.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  {/* <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div> */}
                  <p class="ml-16 text-lg leading-6 font-medium text-white">Research</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-silver">
                  Natural Language Processing Research at RPI Undergraduate Research Program, and published to Italian Journal of Computational Linguistics.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  {/* <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div> */}
                  <p class="ml-16 text-lg leading-6 font-medium text-white">Transfers are instant</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-silver">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  {/* <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div> */}
                  <p class="ml-16 text-lg leading-6 font-medium text-white">Mobile notifications</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-silver">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
