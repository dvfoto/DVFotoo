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


var toTop2 = document.querySelector(".button2");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 300) {
		toTop2.classList.add("show");
	} else {
		toTop2.classList.remove("show");
	}
})


