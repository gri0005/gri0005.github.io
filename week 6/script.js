// // // const myHeading = document.querySelectorAll("p");
// // // console.log(myHeading);
// // // console.log(myHeading.textContent);
// // // console.log(myHeading.innerHTML);
// // // myHeading.style.backgroundColor = "limegreen";
// // // // myHeading.textContent = "my new pet parrot";

// // const allMyPara = document.querySelectorAll("p");
// // console.log(allMyPara);

// // // for (let i = 0; i < 3; i++) {
// // //   allMyPara[i].style.backgroundColor = "hotpink";
// // // }

const myImage = document.querySelector("img");

myImage.addEventListener("mouseover", toggleImage);
myImage.addEventListener("mouseout", toggleImage);

// // allMyPara.forEach(changeColor);
// // function changeColor(item) {
// //   console.log(item.classList);
// //   item.classList.add("lime-box");
// //   //   item.classList.remove("inner");
// //   console.log(item.classList);
// // }
// // const myImage = document.querySelector("#my-button");

// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", filterTopic);

function toggleImage() {
  myImage.classList.toggle("round");
  console.log(myImage.dataset.catname);
}

// function filterTopic() {
//   const myPara = document.querySelectorAll("p");
//   myPara.forEach(displayTopic);
//   function displayTopic() {
//     if (item.dataset.topic === "web") item.style.backgroundColor = "limegreen";
//     else if (item.dataset.topic === "sound") item.style.backgroundColor = "red";
//   }
// }

// const myHeading = document.querySelector("h1");

// myHeading.innerHTML = `This <br> is <span class="coral-box">heading</span>`;
