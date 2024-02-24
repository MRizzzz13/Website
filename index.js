const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector("input");

btn.addEventListener('click', () => {
    search.classList.toggle("active");
    input.focus();
});
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    console.log(window.scrollY, nav.offsetHeight);
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}
