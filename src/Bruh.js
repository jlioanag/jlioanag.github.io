import './Bruh.scss';
import who from './assets/who.jpg'
import { Link, animateScroll as scroll } from "react-scroll";

function Bruh() {

  return (
    <div asscroll-container>
      <Link
        activeClass="active"
        to="about-me"
        spy={true}
        smooth={true}
        offset={-70}
        duration={2000}
      >
        <div class="o-container pt-60 pb-5 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="items-center h-screen text-left text-6xl sm:text-7xl lg:text-8xl c-text">
            <div class="c-image">
              <img class="object-top scale-85 sm:scale-85 lg:scale-100 content-center" src={who} alt=""></img>
            </div>
            <div class="c-text__item c-text__item--full">
              <p class="u-a1 u-uppercase text-white">HEY I'M</p>
              <p class="u-a1 u-uppercase text-white">J<i>U</i>LIAN</p>
            </div>
            <div class="c-text__item c-text__item--outline">
              <p class="u-a1 u-uppercase u-outline">HEY I'M</p>
              <p class="u-a1 u-uppercase u-outline">J<i>U</i>LIAN</p>
            </div>
          </div>
        </div>
      </Link>
      <div id="about-me" class="py-8 bg-metal pt-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p class="mt-4 max-w-4xl text-3xl lg:text-4xl text-silver lg:mx-auto">
            Computer Science student currently living in Troy, New York. I love brainstorming <a class="bg-white hover:bg-silver hover:text-l-purple text-metal font-semibold" href="https://github.com/jlioanag/wav-art">random coding ideas</a> and have contributed to several <a class="bg-white hover:bg-silver hover:text-l-purple text-metal font-semibold" href="https://github.com/sirmammingtonham/smartrider">on-campus projects.</a> <i>More information can be found on my resume and Github!</i>
          </p>
          <p class="mt-4 max-w-xl lg:max-w-4xl text-3xl lg:text-4xl text-silver lg:mx-auto">
            Aside from school and coding, I also enjoy listening, crate digging, and creating music. I play drums, guitar, and bass guitar, and have taken music theory courses. <i>You can find what I've been listening to recently</i> <a class="bg-white hover:bg-silver hover:text-l-purple text-metal font-semibold" href="https://rateyourmusic.com/~jthemage">here.</a>
          </p>
          <p class="mt-4 lg:max-w-xl text-3xl lg:text-4xl text-silver lg:mx-auto">
            Other interests include: cooking, photography, and custom keyboards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bruh;