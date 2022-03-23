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

const arr = ["Theo","Quentin","Louis","Jeffrey","Alexandra","Simon","Jaafar","Valentin"];

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




// const randomButton = document.querySelector('.randomlink');

// randomButton.addEventListener('click', function () {
//     const result = document.getElementById(
//         randomName(arr)
//     );
//     window.scrollTo(
//         result.getClientRects().x,
//         result.getClientRects().y
//     );
//     //randomButton.href = "#" + result;
//     });

// randomButton.addEventListener('mouseover', function () {
//     randomButton.style.cursor = "pointer";
//     });