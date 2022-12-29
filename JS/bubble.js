const phrase = "Aš esu Deividas Vilimaitis";


const targetEl = document.getElementById("buble");

phrase.split("").map((char, idx) => {

    const el = document.createElement("small");

    el.innerText = char;

    el.setAttribute("data-index", idx.toString());
    el.classList.add("hover-char");

    targetEl.appendChild(el);


});

const hoverChars = [...document.getElementsByClassName("hover-char")];

const removeClasses = () => {

    hoverChars.map((char) => {
        char.classList.remove("hovered");
        char.classList.remove("hovered-adjacent");
        char.classList.remove("hovered-adjacent2");
    });


};

hoverChars.map((char) => {
    char.addEventListener("mouseover", (e) => {

        removeClasses();


        const currentElement = e.target;
        const index = parseInt(currentElement.getAttribute("data-index"), 10);

        const prevIndex = index === 0 ? null : index - 1;
        const nextIndex = index === phrase.length - 1 ? null : index + 1;
        const prevIndex2 = index === 0 ? null : index - 2;
        const nextIndex2 = index === phrase.length - 1 ? null : index + 2;


        console.log(nextIndex2);
        console.log(prevIndex2);


        const prevEl =
            prevIndex !== null &&
            document.querySelector(`[data-index="${prevIndex}"]`);
        const nextEl =
            nextIndex !== null &&
            document.querySelector(`[data-index="${nextIndex}"]`);


        const prevEl2 =
            prevIndex2 !== null &&
            document.querySelector(`[data-index="${prevIndex2}"]`);

        const nextEl2 =
            nextIndex2 !== null &&
            document.querySelector(`[data-index="${nextIndex2}"]`);


        e.target.classList.add("hovered");
        prevEl && prevEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("hovered-adjacent");
        prevEl2 && prevEl2.classList.add("hovered-adjacent2");
        nextEl2 && nextEl2.classList.add("hovered-adjacent2");

    });
});

document
    .getElementById("buble")
    .addEventListener("mouseleave", () => {
        removeClasses();

    });
