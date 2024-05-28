const profileBtn = document.querySelector("#profile-btn");
console.log(profileBtn);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

profileBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  profileContent.classList.toggle("show");
}
