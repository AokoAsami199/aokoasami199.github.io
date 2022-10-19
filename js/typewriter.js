var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(300)
  .typeString('im AokoAsami199. <br> a back-end developer. ')
  .pauseFor(300)
  .start();