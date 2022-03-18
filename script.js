const arr = ["theo","quentin","louis","jeffrey","alexandra","simon","jaafar","valentin"];
const randomIndex = Math.floor(Math.random()*arr.length);
const randomValues = arr[randomIndex];
console.log(randomValues);

const randomButton = document.querySelector('.randomlink');
randomButton.addEventListener('click', function () {
    randomButton.href = "#" + randomValues;
    });
randomButton.addEventListener('mouseover', function () {
    randomButton.style.cursor = "pointer";
    });