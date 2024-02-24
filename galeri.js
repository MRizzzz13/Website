const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    // console.log(window.scrollY, nav.offsetHeight);
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

const imgs = document.getElementById("imgs");
const leftbutton = document.getElementById("left");
const rightbutton = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");
console.log(img);

let idx = 0;

function run() {
  idx++;
  changeimage();
}

function changeimage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translatex(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightbutton.addEventListener("click", () => {
  idx++;
  changeimage();
  resetInterval();
});

leftbutton.addEventListener("click", () => {
  idx--;
  changeimage();
  resetInterval();
});
 

