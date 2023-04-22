import './Bruh.scss';
import who from './assets/who.jpg';

function Bruh() {

  return (
    <>
      <img class="absolute w-full h-full object-cover mix-blend-darken" src={who}></img>
      <div class="w-screen mt-20 grid grid-cols-3 gap-5 place-items-left">
        <div></div>
        
        <div class="p-5 bg-coffee text-xl">
          <div class="pb-10">julianlioanag</div>
          <div class="pb-10">julianlioanag@gmail.com</div>
          <div class="pb-10">location</div>
          <div>time</div>
        </div>
        <div></div>

        <div></div>
        <div class="p-5 bg-coffee text-xl">
          <div class="pb-10">(resume)</div>
          <div class="pb-10">(linkedin)</div>
          <div class="pb-10">(github)</div>
          <div>(soundcloud)</div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Bruh;