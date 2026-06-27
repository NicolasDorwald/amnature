const btn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
        // console.log(window.scrollY); // test
    if (window.scrollY > 300) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    } else {
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
    }
});


btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("clic OK");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});