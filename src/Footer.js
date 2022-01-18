import './Footer.css';

function Footer() {
  let splashes = [
    'Built with coffee, cereal, and Chick Corea.',
    'See you space cowboy...',
    'Listen to Julian Algernon!',
    'I want to personally thank the person who invented Tylenol.',
    'No coffee past 5pm!',
    'Sleep.',
    'Buy the thing you\'ve been eyeing.',
    'Mos Def and 3-stacks :^)',
    'Play that game you bought years ago but haven\'t touched.',
    'Shout out to Ricky Wang wherever you are...'
  ];
  let randomNumber = Math.floor(Math.random()*splashes.length);

  return (
    <footer class="text-center text-silver fixed inset-x-0 bottom-0">
      <div class="text-center text-silver p-4">
        <p class="italic">Julian Lioanag 2022</p>
        <div class="font-thin">{splashes[randomNumber]}</div>
      </div>
    </footer>
  );
}

export default Footer;