var toTop = document.querySelector(".button");
var mouse = document.querySelector(".mouse");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 300) {
		toTop.classList.add("show");
		mouse.classList.add("invisible");
	} else {
		toTop.classList.remove("show");
		mouse.classList.remove("invisible");
	}
});





