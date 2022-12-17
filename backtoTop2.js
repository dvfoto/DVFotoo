
var toTop2 = document.querySelector(".button2");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop2.classList.add("show");
    } else {
        toTop2.classList.remove("show");
    }
})



// Get the loading div
var loading = document.getElementById('loding_div');
var container = document.getElementById('container');

// Show the loading div
function showLoading() {
    loading.style.display = 'flex';
    container.style.display = 'none';
    console.log(loading);
    console.log(container);
}

// Hide the loading div
function hideLoading() {
    loading.style.display = 'none';
    container.style.display = 'flex';
}

// Listen for the content to start loading
window.addEventListener('DOMContentLoaded', showLoading);

// Listen for the content to finish loading
window.addEventListener('load', hideLoading);
