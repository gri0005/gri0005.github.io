const notifAudio = document.querySelector("#notif-audio");
console.log(notifAudio);

const playButton = document.querySelector("#play-button");
console.log(playButton);
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

playButton.addEventListener("click", playNotifAudio);
pauseButton.addEventListener("click", pauseNotifAudio);

// notifAudio.removeAttribute("controls");

function playNotifAudio() {
  console.log(notifAudio);
  notifAudio.play();
}

function pauseNotifAudio() {
  console.log(notifAudio);
  notifAudio.pause();
}

const popAudio = document.querySelector("#pop-audio");
console.log(popAudio);
const popButton = document.querySelector("#pop-button");
console.log(popButton);
popButton.addEventListener("click", popPlay);

function popPlay() {
  console.log("popping...");
  popAudio.play();
}
