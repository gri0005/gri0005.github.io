const catImg = document.querySelector("#cat-img");
console.log(catImg);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

catImg.addEventListener("mouseover", showInfo);
catImg.addEventListener("mouseout", hideInfo);

function showInfo() {
  moreInfo.classList.add("show");
}

function hideInfo() {
  moreInfo.classList.remove("show");
}
