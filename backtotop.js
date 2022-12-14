var toTop = document.querySelector(".button");
var mouse = document.querySelector(".mouse");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 300) {
		toTop.classList.add("show");
		window.location.reload();
		mouse.classList.add("invisible");
	} else {
		toTop.classList.remove("show");
		mouse.classList.remove("invisible");
	}
});


let docTitle = document.title;
window.addEventListener("blur", () => {
	document.title = "Sugrįžk :(";
});
window.addEventListener("focus", () => {
	document.title = docTitle;
});




