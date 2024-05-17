const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBarFill = document.querySelector("#progress-bar-fill");
const progressBarEmpty = document.querySelector("#progress-bar-empty");
const timerTimeSelector = document.querySelector("#timer-select");
const timerInfo = document.querySelector("#timer-info");
const countdownDisplay = document.querySelector("#time-remaining");
console.log(timerInfo.textContent);
let irlTime = 0;

// displays countdown length
timerTimeSelector.addEventListener("change", setTimerText);
function setTimerText() {
  timerInfo.innerHTML = "timer is set for " + timerTimeSelector.value;
}

playPauseBtn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";

    var timerDuration = 60 * timerTimeSelector.value;
    startTimer(timerDuration, countdownDisplay);
  }

  // else {
  //   audio.pause();
  //   playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  // }
  const dateTime = new Date();
  let startTime = dateTime.getTime();

  audio.addEventListener("timeupdate", updateProgressBar);
}

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBarFill.style.width = value + "%";
  progressBarEmpty.style.width = 100 - value + "%";
}

// Add other functionalities here

function startTimer(timerDuration, countdownDisplay) {
  var timer = timerDuration,
    hours,
    minutes,
    seconds;

  setInterval(function () {
    hours = parseInt(timer / (60 * 60), 10);
    minutes = parseInt(timer / 60, 10);
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

    // resets timer at the end
    if (--timer < 0) {
      timer = timerDuration;
    }
  }, 1000);
}
