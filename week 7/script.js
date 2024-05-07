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
