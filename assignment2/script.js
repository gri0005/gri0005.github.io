const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBarFill = document.querySelector("#progress-bar-fill");
const progressBarEmpty = document.querySelector("#progress-bar-empty");
const timerTimeSelector = document.querySelector("#timer-select");
const timerInfo = document.querySelector("#timer-info");
const countdownDisplay = document.querySelector("#time-remaining");
let myInt;
console.log(timerInfo.textContent);

// displays countdown length
timerTimeSelector.addEventListener("change", setTimerText);
function setTimerText() {
  timerInfo.innerHTML = "timer is set for " + timerTimeSelector.value;
}

playPauseBtn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "icons8-stop-90.png";

    audio.addEventListener("timeupdate", updateProgressBar);

    playPauseBtn.classList.add("inprog");
    console.log(playPauseBtn.classList);
  }

  // Stop and reset everything:
  else {
    audio.pause();
    audio.currentTime = 0;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    playPauseBtn.classList.remove("inprog");
    console.log(playPauseBtn.classList);

    playPauseBtn.classList.add("noprog");
    console.log(playPauseBtn.classList);
  }

  decidingTimer();
}

// customised progress bar:

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBarFill.style.width = value + "%";
  progressBarEmpty.style.width = 100 - value + "%";
}

// timer function fml feed me lunch

function decidingTimer() {
  if ((playPauseBtn.classList = "inprog")) {
    var count = 60 * 0.5,
      display = countdownDisplay;
    console.log("commencing timer");
    startTimer(count, display);
  } else {
    clearInterval(intervalId);
    console.log("clearing timer");
  }
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var intervalId = setInterval(function () {
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

    if (--timer < 0) {
      timer = duration;
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
  }, 1000);
}

// }

//   document
//     .getElementsByClassName("inprog")
//     .addEventListener("click", function () {
//       clearInterval(intervalId);
//     });
// }

// window.onload = function () {
//   var count = 60 * 0.5,
//     display = countdownDisplay;
//   // display.textContent = "00:"+count;
//   // document.getElementsByClassName("noprog")
//   //   .addEventListener("click", function () {
//   //     startTimer(count, display);
//   //   });
// };
