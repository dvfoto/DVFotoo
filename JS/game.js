const gridItems = document.querySelectorAll('.grid .grid_iteam');
let previouslyHoveredItem = null;

gridItems.forEach(item => {
    item.addEventListener("click", function () {
        if (previouslyHoveredItem) {
            previouslyHoveredItem.classList.remove("hovered");
        }
        this.classList.add("hovered");
        previouslyHoveredItem = this;
    });
});




console.clear();
// div to hold snow scene
let frame = document.querySelector("#frame");
frame.style.width = `100vw`;
frame.style.height = `100vh`;
frame.style.backgroundSize = `100vw 100vh`;
//
window.onload = function () {
    // frame.style.backgroundImage =
    //     'url("https://assets.codepen.io/550547/winterCabin.jpg")';
    //graphicsfactory.com
    let flakeSizes = [1, 1, 2, 2, 3, 3];
    let flakeColor = [
        "lightblue",
        "lightblue",
        "lightgray",
        "lightgray",
        "white",
        "white"
    ];

    //constructor for three sets of canvas objects to scroll down. As the bottom canvas leaves the screen it is reset above the view window to start again.
    class Canvas {
        constructor(
            canvasDiv,
            canvasCtx,
            left,
            canvasTop,
            height,
            width,
            scrollRate
        ) {
            this._canvasDiv = canvasDiv;
            this._canvasCtx = canvasCtx;
            this._left = left;
            this._canvasTop = canvasTop;
            this._width = width;
            this._height = height;
            this._scrollRate = scrollRate;
        }

        get canvasDiv() {
            return this._canvasDiv;
        } //

        get canvasCtx() {
            return this._canvasCtx;
        }

        set canvasTop(elem) {
            this._canvasTop = elem;
        }

        get canvasTop() {
            return this._canvasTop;
        }

        get height() {
            return this._height;
        }

        set scrollRate(elem) {
            this._scrollRate = elem;
        }

        get scrollRate() {
            return this._scrollRate;
        }

        get width() {
            return this._width;
        }

        set width(elem) {
            this._width = elem;
        }
    }

    //instantiate canvases
    let classCanvases = [];
    let thisTop;
    let topCanvasTop = screen.height * -1;
    // create canvas objects and its properties
    let makeCanvases = function () {
        for (let count = 0; count < 6; count += 1) {
            let node = document.createElement("canvas");
            node.classList.add("canvas");
            node.width = screen.width;
            node.height = screen.height;
            document.querySelector("#frame").appendChild(node);
            canvasCtx = node.getContext("2d");
            // stack even count canvases above window
            if (count === 0 || count === 2 || count === 4) {
                thisTop = topCanvasTop;
            } else {
                thisTop = 0;
            }
            // set different scroll rates for each set
            if (count < 2) {
                scrollRate = 1;
            } else if (count > 1 && count < 4) {
                scrollRate = 2;
            } else {
                scrollRate = 3;
            }
            // put canvases into an array to loop animation
            classCanvases.push(
                new Canvas(
                    node,
                    canvasCtx,
                    0,
                    thisTop,
                    screen.width,
                    screen.height,
                    scrollRate,
                    0
                )
            );
        }
    };


    //slider to increase or decrease number of snowflakes
    document.querySelector("#myRange").oninput = function () {
        drawFlakes(this.value);
    };

    //draw flakes on canvases
    let drawFlakes = function (numFlakes = 5000) {
        for (let [index, elem] of classCanvases.entries()) {
            elem.canvasCtx.clearRect(0, 0, screen.width, screen.height);
            for (let count = 0; count < numFlakes; count += 1) {
                elem.canvasCtx.beginPath();
                elem.canvasCtx.fillStyle = flakeColor[index];
                elem.canvasCtx.strokeStyle = flakeColor[index];
                elem.canvasCtx.arc(
                    Math.floor(Math.random() * screen.width),
                    Math.floor(Math.random() * screen.height),
                    flakeSizes[index],
                    0,
                    2 * Math.PI
                );
                elem.canvasCtx.stroke();
                elem.canvasCtx.fill();
            }
        }
    };

    //requestAnimationFrame loop
    let canvasLoop1 = function (time) {
        //move each canvas down by the scroll rate and check to see if it needs to go back to above the view screen
        for (let [index, elem] of classCanvases.entries()) {
            elem.canvasTop += elem.scrollRate;
            if (elem.canvasTop >= screen.height) {
                elem.canvasTop = topCanvasTop;
            }
            elem.canvasDiv.style.top = elem.canvasTop + "px";
        }
        requestAnimationFrame(canvasLoop1);
    };

    makeCanvases();
    drawFlakes(100);
    canvasLoop1();



};