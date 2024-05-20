const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBarFill = document.querySelector("#progress-bar-fill");
const progressBarEmpty = document.querySelector("#progress-bar-empty");
const timerTimeSelector = document.querySelector("#timer-select");
const timerInfo = document.querySelector("#timer-info");
const countdownDisplay = document.querySelector("#time-remaining");
const ambBirdButton = document.querySelector("#amb-bird-btn");
const birdSound = document.querySelector("#bird-sound");
let isPlaying = false;
let intervalID;
let timerDuration = 10;
let birdPlaying = false;

// displays countdown length
timerTimeSelector.addEventListener("change", setTimerText);
function setTimerText() {
  timerInfo.innerHTML =
    "Setting the timer for " + timerTimeSelector.value + " minutes!";
  timerDuration = timerTimeSelector.value * 60;
}

playPauseBtn.addEventListener("click", togglePlayPause);
ambBirdButton.addEventListener("click", toggleBird);

// toggles bird amb sounds on and off, only plays while the timer is going
function toggleBird() {
  if (!birdPlaying) {
    ambBirdButton.classList.remove("ambs");
    ambBirdButton.classList.add("clicked-ambs");
    birdPlaying = true;
    if (isPlaying) {
      birdSound.play();
    }
  } else {
    ambBirdButton.classList.remove("clicked-ambs");
    ambBirdButton.classList.add("ambs");
    birdSound.pause();
    birdPlaying = false;
  }
}

// triggers everything when play/stop button pressed
function togglePlayPause() {
  let intervalID;
  if (!isPlaying) {
    audio.play();
    playPauseImg.src = "icons8-stop-90.png";
    isPlaying = true;
    intervalID = startTimer(timerDuration);

    if (birdPlaying) {
      birdSound.play();
    }
  } else {
    audio.pause();
    birdSound.pause();
    audio.currentTime = 0;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    isPlaying = false;
    resetTimer(timerDuration);
  }
}

// customised shrinking progress bar, linked to timer not audio:
function updateProgressBar(timer) {
  console.log(intervalID);
  const value = (timer / timerDuration) * 100;
  progressBarEmpty.style.width = value + "%";
  progressBarFill.style.width = 100 - value + "%";
}

// start the timer
function startTimer(duration) {
  var timer = duration,
    minutes,
    seconds;
  intervalID = setInterval(function () {
    hours = parseInt(timer / (60 * 60), 10);
    minutes = parseInt((timer / 60) % 60, 10);
    seconds = parseInt(timer % 60, 10);

    // display the time in the correct format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //display only MM:SS if timer is set for less than an hour
    if (hours > 0) {
      countdownDisplay.textContent =
        hours + ":" + (minutes == 60 ? "00" : minutes) + ":" + seconds;
    } else {
      countdownDisplay.textContent = minutes + ":" + seconds;
    }

    // stop if it reaches 0
    if (--timer < 0) {
      togglePlayPause();
    }

    // update the progress bar!
    updateProgressBar(timer);
  }, 1000);
}

// clear and reset the timer to end everything on stop button click
function resetTimer(duration) {
  clearInterval(intervalID);
  var timer = duration,
    minutes,
    seconds;

  hours = parseInt(timer / (60 * 60), 10);
  minutes = parseInt((timer / 60) % 60, 10);
  seconds = parseInt(timer % 60, 10);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 0) {
    countdownDisplay.textContent =
      hours + ":" + (minutes == 60 ? "00" : minutes) + ":" + seconds;
  } else {
    countdownDisplay.textContent = minutes + ":" + seconds;
  }
  updateProgressBar(timer);
}
