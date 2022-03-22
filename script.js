function randomName (array) {
    const randomIndex = Math.floor(Math.random()*array.length);
    const randomValues = array[randomIndex];
    console.log(randomValues);
    return randomValues;
}

const arr = ["theo","quentin","louis","jeffrey","alexandra","simon","jaafar","valentin"];

const randomButton = document.querySelector('.randomlink');

randomButton.addEventListener('click', function () {
    result = randomName(arr)
    randomButton.href = "#" + result;
    });

randomButton.addEventListener('mouseover', function () {
    randomButton.style.cursor = "pointer";
    });