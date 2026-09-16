const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach(function (pad) {
  pad.addEventListener("click", function () {
    const audio = pad.querySelector(".clip");
    const newAudio = audio.cloneNode();
    newAudio.play();
    display.textContent= pad.id;
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);
  if (audio) {
    const newAudio = audio.cloneNode();
    newAudio.play();
    display.textContent = audio.parentElement.id;
  }
});