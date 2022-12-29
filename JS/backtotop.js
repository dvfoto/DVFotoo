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


let docTitle = document.title;
window.addEventListener("blur", () => {
	document.title = "Sugrįžk :(";
});
window.addEventListener("focus", () => {
	document.title = docTitle;
});



function createSnowFlake() {
	// generate a random size, position, and velocity for the snowflake
	const size = Math.random() * 3 + 2;
	const x = Math.random() * window.innerWidth;
	let y = Math.random() * window.innerHeight;
	const velocity = Math.random() + 0.5;

	console.log(y);
	console.log(velocity);
	// draw the snowflake on the canvas
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();

	// update the position of the snowflake and check if it's off the screen
	y += velocity;
	if (y > window.innerHeight) {
		y = -5;  // reset the position to the top of the canvas
	}

	// use requestAnimationFrame to animate the snowflakes
	requestAnimationFrame(createSnowFlake);
}

// get the canvas element and context
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

// start the animation
createSnowFlake();
