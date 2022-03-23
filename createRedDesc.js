function createRedDesc(data){
    return `
    <div id="${data.name}">
            <img src="${data.redimg}" alt="photo-eleve">
            <div class="biographie">
                <h2>${data.name} ${data.firstname}</h2>
                <h4>${data.age} ans, ${data.city}</h4>
                <h5>${data.skills}</h5>
                <div class="icons">
                    <a href="${data.github}"><img src="./media/icons/github-red.png"
                            alt="icon-github-red" class="icon"></a>
                    <a href="${data.linkedin}"><img
                            src="./media/icons/linkedin-red.png" alt="icon-linkedin-red" class="icon"></a>
                    <img src="./media/icons/website-red.png" alt="icon-link-red" class="icon">
                </div>
            </div>
            <p>${data.desc}</p>
    </div>
    `;
}

export default createRedDesc;