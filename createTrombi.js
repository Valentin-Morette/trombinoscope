function createTrombi(data){
    return `
    <div>
        <div class="box-img>
            <img src="${data.redimg}" class="student" alt="photo-alexandra">
        </div>
        <div class="iconstrombi">
            <a href="${data.linkedin}><img src="./media/icons/linkedin-red.png" class="icon" alt="icon linkedin"></a>
            <a href="${data.github}"><img src="./media/icons/github-red.png" class="icon" alt="icon github"></a>
        </div>
        <p>${data.name}</p>
        </div>
    `;
}

export default createTrombi;