// declaring Everything
const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBarFill = document.querySelector("#progress-bar-fill");
const progressBarEmpty = document.querySelector("#progress-bar-empty");
const timerTimeSelector = document.querySelector("#timer-select");
const timerInfo = document.querySelector("#timer-info");
const countdownDisplay = document.querySelector("#time-remaining");
const ambBirdButton = document.querySelector("#amb-bird-btn");
const ambWavesButton = document.querySelector("#amb-waves-btn");
const ambTreesButton = document.querySelector("#amb-trees-btn");
const ambRainButton = document.querySelector("#amb-rain-btn");
const birdSound = document.querySelector("#bird-sound");
const wavesSound = document.querySelector("#waves-sound");
const treesSound = document.querySelector("#trees-sound");
const rainSound = document.querySelector("#rain-sound");
let isPlaying = false;
let intervalID;
let timerDuration = 10;
let birdPlaying = false;
let wavesPlaying = false;
let treesPlaying = false;
let rainPlaying = false;

// displays countdown length
timerTimeSelector.addEventListener("change", setTimerText);
function setTimerText() {
  timerInfo.innerHTML =
    "Setting the timer for " + timerTimeSelector.value + " minutes!";
  timerDuration = timerTimeSelector.value * 60;
}

// listens for clicks
playPauseBtn.addEventListener("click", togglePlayPause);
ambBirdButton.addEventListener("click", toggleBird);
ambWavesButton.addEventListener("click", toggleWaves);
ambTreesButton.addEventListener("click", toggleTrees);
ambRainButton.addEventListener("click", toggleRain);

// toggles rain amb button styling
// if the main audio is playing, plays rain amb sounds
// toggles "rainPlaying" variable
// specifies volume
function toggleRain() {
  if (!rainPlaying) {
    ambRainButton.classList.remove("ambs");
    ambRainButton.classList.add("clicked-ambs");
    rainPlaying = true;
    if (isPlaying) {
      rainSound.play();
    }
  } else {
    ambRainButton.classList.remove("clicked-ambs");
    ambRainButton.classList.add("ambs");
    rainSound.pause();
    rainPlaying = false;
  }
  rainSound.volume = 0.08;
}

// toggles trees amb same as above
function toggleTrees() {
  if (!treesPlaying) {
    ambTreesButton.classList.remove("ambs");
    ambTreesButton.classList.add("clicked-ambs");
    treesPlaying = true;
    if (isPlaying) {
      treesSound.play();
    }
  } else {
    ambTreesButton.classList.remove("clicked-ambs");
    ambTreesButton.classList.add("ambs");
    treesSound.pause();
    treesPlaying = false;
  }
  treesSound.volume = 1;
}

// toggles waves amb
function toggleWaves() {
  if (!wavesPlaying) {
    ambWavesButton.classList.remove("ambs");
    ambWavesButton.classList.add("clicked-ambs");
    wavesPlaying = true;
    if (isPlaying) {
      wavesSound.play();
    }
  } else {
    ambWavesButton.classList.remove("clicked-ambs");
    ambWavesButton.classList.add("ambs");
    wavesSound.pause();
    wavesPlaying = false;
  }
  wavesSound.volume = 0.07;
}

// toggles bird amb
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
  birdPlaying.volume = 1;
}

// triggers everything when play/stop button pressed
function togglePlayPause() {
  let intervalID;

  // triggers timer, plays audio, switches icon, plays any
  // ambiances that have their boolean set to true/have been toggled on
  if (!isPlaying) {
    audio.play();
    playPauseImg.src = "icons8-stop-90.png";
    isPlaying = true;
    intervalID = startTimer(timerDuration);

    if (birdPlaying) {
      birdSound.play();
    }
    if (wavesPlaying) {
      wavesSound.play();
    }
    if (treesPlaying) {
      treesSound.play();
    }
    if (rainPlaying) {
      rainSound.play();
    }

    // triggers timer reset, switches icon,
    // pauses all audio, resets main audio to the start
  } else {
    audio.pause();
    birdSound.pause();
    wavesSound.pause();
    treesSound.pause();
    rainSound.pause();
    audio.currentTime = 0;
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    isPlaying = false;
    resetTimer(timerDuration);
  }
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
      timerInfo.textContent = "Great work! Set another timer?";
      // reset the progress bar
      progressBarEmpty.style.width = "100%";
      progressBarFill.style.width = "0%";
    } else {
      // update the progress bar!
      // customised shrinking progress bar, linked to timer not audio:
      const value = (timer / timerDuration) * 100;
      progressBarEmpty.style.width = value + "%";
      progressBarFill.style.width = 100 - value + "%";
    }
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

  // update the progress bar
  const value = (timer / timerDuration) * 100;
  progressBarEmpty.style.width = value + "%";
  progressBarFill.style.width = 100 - value + "%";
}
