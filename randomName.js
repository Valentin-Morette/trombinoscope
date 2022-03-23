function randomName (array) {
    const randomIndex = Math.floor(Math.random()*array.length);
    const randomValues = array[randomIndex];
    console.log(randomValues);
    return randomValues;
}

export default randomName;