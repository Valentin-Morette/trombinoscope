import randomName from "./randomName.js";
import student from "./students.js";
import createTrombi from "./createTrombi.js";

// function randomName (array) {
//     const randomIndex = Math.floor(Math.random()*array.length);
//     const randomValues = array[randomIndex];
//     console.log(randomValues);
//     return randomValues;
// }

const arr = ["theo","quentin","louis","jeffrey","alexandra","simon","jaafar","valentin"];

const trombiAsArr = student.map(createTrombi);
const trombiAsString = trombiAsArr.join("");

document.querySelector(".trombi").innerHTML = trombiAsString;



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