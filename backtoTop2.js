
var toTop2 = document.querySelector(".button2");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop2.classList.add("show");
    } else {
        toTop2.classList.remove("show");
    }
});




