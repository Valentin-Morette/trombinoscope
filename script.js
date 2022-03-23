import randomName from "./randomName.js";
import student from "./students.js";
import createTrombi from "./createTrombi.js";
import createWhiteDesc from "./createWhiteDesc.js";
import createRedDesc from "./createRedDesc.js";

// function randomName (array) {
//     const randomIndex = Math.floor(Math.random()*array.length);
//     const randomValues = array[randomIndex];
//     console.log(randomValues);
//     return randomValues;
// }

const arr = ["Théo","Quentin","Louis","Jeffrey","Alexandra","Simon","Jaafar","Valentin"];

const trombiAsArr = student.map(createTrombi);
const trombiAsString = trombiAsArr.join("");
let descAsArr = [];

for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
        descAsArr[i] = createWhiteDesc(student[i]);
    } else {
        descAsArr[i] = createRedDesc(student[i]);
    }
}

const descAsString = descAsArr.join("");

document.querySelector(".trombi").innerHTML = trombiAsString;
document.querySelector(".presentation").innerHTML = descAsString;




const randomButton = document.querySelector('.randomlink');

randomButton.addEventListener('click', function () {
    const name = randomName(arr);
    const element = document.getElementById(name);

    // thx https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    const elementOffset = offset(element);

    window.scrollTo(
        elementOffset.left,
        elementOffset.top - 106
    );
});

randomButton.addEventListener('mouseover', function () {
    randomButton.style.cursor = "pointer";
    });