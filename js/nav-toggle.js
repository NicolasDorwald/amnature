const nav = document.querySelector(".nav");
const navBar = document.querySelector(".nav-toggle");

navBar.addEventListener("click", (e) => {
    // console.log("click");
    e.stopPropagation(); // empêche la fermeture immédiate
    nav.classList.toggle("open");
});

window.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
        nav.classList.remove("open");
    }
});