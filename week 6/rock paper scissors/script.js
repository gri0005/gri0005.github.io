const result = document.querySelector("#result");
const selection = document.querySelector("#selection");
const options = ["rock", "paper", "scissors"];
const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");

rock.addEventListener("click", rockClicked);

function rockClicked() {
  check(0);
}

paper.addEventListener("click", paperClicked);

function paperClicked() {
  check(1);
}

scissors.addEventListener("click", scissorsClicked);

function scissorsClicked() {
  check(2);
}

function check(userChoice) {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log("user chose", userChoice);
  console.log("computer chose", computerChoice);
  selection.innerHTML=
  
    if (options[userChoice] === "rock" && options[computerChoice] === "scissors")
    result.innerHTML = "<p>You Win!</p>";
  else if (
    options[userChoice] === "rock" &&
    options[computerChoice] === "paper"
  )
    result.innerHTML = "<p>You Lose!</p>";
  else if (
    options[userChoice] === "scissors" &&
    options[computerChoice] === "rock"
  )
    result.innerHTML = "<p>You Lose!</p>";
  else if (
    options[userChoice] === "scissors" &&
    options[computerChoice] === "paper"
  )
    result.innerHTML = "<p>You Win!</p>";
  else if (
    options[userChoice] === "paper" &&
    options[computerChoice] === "scissors"
  )
    result.innerHTML = "<p>You Lose!</p>";
  else if (
    options[userChoice] === "paper" &&
    options[computerChoice] === "rock"
  )
    result.innerHTML = "<p>You Win!</p>";
  else result.innerHTML = "<p>It's a tie</p>";
}
