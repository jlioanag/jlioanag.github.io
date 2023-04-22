import './Bruh.scss';
import grain from './assets/images/grain.jpg';
import Clock from './Clock';

function Bruh() {

  return (
    <>
      <img style={{'pointer-events': 'none'}} class="absolute w-full h-full opacity-20 mix-blend-multiply" src={grain} alt="this is a test"></img>
      <img style={{'pointer-events': 'none'}} class="ml-10 absolute w-full h-full opacity-20 mix-blend-multiply" src={grain} alt="this is a test"></img>
      <img style={{'pointer-events': 'none'}} class="mr-40 absolute w-full h-full opacity-20 mix-blend-multiply" src={grain} alt="this is a test"></img>
      
      <div class="font-bold flex items-center justify-center h-1/2 pt-40">
        <div class="py-5 pl-5 pr-40 bg-coffee text-xl mb-10 w-1/4">
          <div class="pb-10">julian lioanag</div>
          <div class="pb-10">new jersey, us</div>
          <div class="pb-10"><Clock /> est</div>
          <div>ms it, bs cs</div>
        </div>
      </div>
      <div class="font-bold flex items-center justify-center h-1/2">
        <div class="py-5 pl-5 pr-40 bg-coffee text-xl w-1/4">
          <div class="pb-10">
            <a href="">(resume)</a>
          </div>
          <div class="pb-10">
            <a href="https://linkedin.com/in/jlioanag/">(linkedin)</a>
          </div>
          <div class="pb-10">
            <a href="https://github.com/jlioanag">(github)</a>
          </div>
          <div>
            <a href="https://soundcloud.com/jalgernon">(soundcloud)</a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Bruh;