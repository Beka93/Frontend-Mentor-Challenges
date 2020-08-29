var slider = document.querySelector(".carousel-inner").children;
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
let index = 0;

function changeContainer() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active");
  }
  slider[index].classList.add("active");
}

function prevContainer() {
  if (index == 0) {
    index = slider.length - 1;
  } else {
    index--;
  }
  changeContainer();
}

function nextContainer() {
  if (index == slider.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeContainer();
}

prev.addEventListener("click", function () {
  prevContainer();
});
next.addEventListener("click", function () {
  nextContainer();
});