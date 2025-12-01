const factImages = [
  "293-dollar.png",
  "alaska-caribou.png",
  "almond-peach.png",
  "animal-crackers.png",
  "apples-float.png",
  "bee-eyelids.png",
  "biggest-pig.png",
  "boil-freeze.png",
  "breathe-nostril.png",
  "bubblewrap.png",
  "cat-spy.png",
  "cloud-raindrops.png",
  "firs-vcr.png",
  "first-coaster.png",
  "goldfish.png",
  "liberty-feet.png",
  "lobster-conga.png",
  "longest-hiccup.png",
  "mongolia-lemonade.png",
  "oldest-clam.png",
  "oregon-ghost.png",
  "plant-fever.png",
  "sailor-earrings.png",
  "texas-space-ballot.png",
  "zero-roman.png"
  ];

const factImg = document.getElementById("fact-img");
const popSound = document.getElementById("pop-sound");
const capToggle = document.getElementById("flip-toggle");

function showRandomFact() {
  const randomFact = factImages[Math.floor(Math.random() * factImages.length)];
  factImg.src = "images/" + randomFact;
}

capToggle.addEventListener("change", () => {
  popSound.currentTime = 0; // rewind to start
  popSound.play();
  showRandomFact();
});