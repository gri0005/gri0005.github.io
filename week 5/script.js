// let temperature = prompt("what is the temperature?");
function checkWeather() {
  let temp = document.querySelector("#temperature");
  let temperature = temp.value;
  if (temperature < 20 && temperature >= 10) {
    console.log("It feels cold");
  } else if (temperature >= 20 && temperature < 27) {
    console.log("it feels nice out");
  } else if (temperature < 10) {
    console.log("it is chilly");
  } else {
    console.log("it's crazy out there");
  }
}
