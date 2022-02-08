import './Footer.css';

function Footer() {
  let splashes = [
    'Built with coffee, cereal, and Chick Corea.',
    'See you space cowboy...',
    'Listen to Julian Algernon!',
    'Sleep.',
    'Buy the thing you\'ve been eyeing.',
    'Mos Def and 3-stacks :^)',
    'Play that game you bought years ago but haven\'t touched.',
    'Shout out to Ricky Wang wherever you are...',
    'Remind me to clean my room.'
  ];
  let randomNumber = Math.floor(Math.random()*splashes.length);

  return (
    <div class="font-body">
      <footer class="bg-metal text-center text-silver static md:fixed inset-x-0 bottom-0">
        <div class="text-center text-silver p-4">
          <div class="max-w-xl mx-auto px-4 md:px-6 lg:px-8">
            <p class="italic">Julian Lioanag 2022</p>
            <div class="font-thin">{splashes[randomNumber]}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;