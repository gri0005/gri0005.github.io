const arrowRight = document.getElementById("arrowicon-right");
const arrowLeft = document.getElementById("arrowicon-left");
const slideshow = document.querySelector(".outer");
const detectorBar = document.getElementById("bar");
const footerNav = document.getElementById("nav-detector");
const imageDivArray = document.querySelectorAll(".inner");
const previewRight = document.getElementById("arrowpreview-right");
const previewLeft = document.getElementById("arrowpreview-left");
const previewPane = document.getElementById("preview-pane");
let clicked = false;

arrowRight.addEventListener("click", scrollToRight);
arrowLeft.addEventListener("click", scrollToLeft);
previewRight.addEventListener("click", prevScrollRight);
previewLeft.addEventListener("click", prevScrollLeft);
slideshow.addEventListener("scrollend", snapToScroll);
detectorBar.addEventListener("click", footerAppear);

// so that the footer closes when you click away but not when you click the side arrows
imageDivArray.forEach(function (item) {
  item.addEventListener("click", closeFooter);
});

function prevScrollRight() {
  previewPane.scrollTo({
    left: previewPane.scrollLeft + visualViewport.width,
    behavior: "smooth",
  });
}

function prevScrollLeft() {
  previewPane.scrollTo({
    left: previewPane.scrollLeft - visualViewport.width,
    behavior: "smooth",
  });
}

// function for toggling the footer open and closed by clicked the button/bar
function footerAppear() {
  if (clicked) {
    footerNav.style.bottom = "-6rem";
    clicked = false;
  } else {
    footerNav.style.bottom = "0";
    clicked = true;
  }
}

// closes the footer when you click away from it
function closeFooter() {
  footerNav.style.bottom = "-6rem";
  clicked = false;
}

// scrolls one slide to the right when you click on the arrow
function scrollToRight() {
  let scrollDestination = slideshow.scrollLeft + visualViewport.width;
  console.log(scrollDestination);
  slideshow.scrollTo({ left: scrollDestination, behavior: "smooth" });
  console.log("right arrow scrolling");
}

// scrolls one slide to the left when you click on the arrow
function scrollToLeft() {
  let scrollDestination = slideshow.scrollLeft - visualViewport.width;
  console.log("scroll destination is " + scrollDestination);
  slideshow.scrollTo({ left: scrollDestination, behavior: "smooth" });
  console.log("left arrow scrolling");
}

// determines which slide is most fully in view and snaps the scroll to that slide.
// Each slide is the width of the viewport!
function snapToScroll() {
  console.log("scroll detected");
  let scrollDecider = slideshow.scrollLeft / visualViewport.width;
  console.log("scroll decider is " + scrollDecider);

  slideshow.scrollTo({
    left: Math.round(scrollDecider) * visualViewport.width,
    behavior: "smooth",
  });

  //   removes the right arrow after scrolling to the last slide
  if (scrollDecider > 20.5) {
    arrowRight.classList.remove("arrowthere");
    arrowRight.classList.add("arrownull");
    arrowRight.style.cursor = "default";
  } else {
    arrowRight.classList.add("arrowthere");
    arrowRight.classList.remove("arrownull");
    arrowRight.style.cursor = "pointer";
  }

  //   removes the left arrow after scrolling to the first slide
  if (scrollDecider < 0.5) {
    arrowLeft.classList.remove("arrowthere");
    arrowLeft.classList.add("arrownull");
    arrowLeft.style.cursor = "default";
  } else {
    arrowLeft.classList.add("arrowthere");
    arrowLeft.classList.remove("arrownull");
    arrowLeft.style.cursor = "pointer";
  }
  console.log(arrowRight.classList);
}
