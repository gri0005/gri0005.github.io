const catBtn = document.querySelector("#cat-button");
console.log(catBtn);

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

catBtn.addEventListener("click", increaseLikes);

function increaseLikes() {
  console.log("clicked");
  likeCount++;
  likes.textContent = likeCount;
}
