const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

const playPauseButtonImg = document.querySelector("#play-pause-button-img");
console.log(playPauseButtonImg);

playPauseButton.addEventListener("click", playPauseVideo);

function playPauseVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
  } else {
    myVideo.pause();

    playPauseButtonImg.src = "cat.JPG";
  }
  console.log(playPauseButtonImg);
}
