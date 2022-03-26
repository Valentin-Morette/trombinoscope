function createTrombi(data){
    return `
    <div>
        <a class="box-img" href="#${data.name}"><img src="${data.redimg}" class="student" alt="photo-${data.name}"></a>
        <div class="iconstrombi">
        <a href="${data.linkedin}" target="_blank"><img src="./media/icons/linkedin-red.png" class="icon" alt="icon linkedin"></a>
        <a href="${data.github}" target="_blank"><img src="./media/icons/github-red.png" class="icon" alt="icon github"></a>
        </div>
        <p class="namestudent">${data.name}</p>
        </div>
    `;
}

export default createTrombi;