function createWhiteDesc(data){
    return `
    <div id="${data.name}">
            <img src="${data.whiteimg}" alt="photo-eleve">
            <div class="biographie">
                <h2>${data.name} ${data.firstname}</h2>
                <h4>${data.age} ans, ${data.city}</h4>
                <h5>${data.skills}</h5>
                <div class="icons">
                    <a href="${data.github}"><img src="./media/icons/github-white.png"
                            alt="icon-github-white" class="icon"></a>
                    <a href="${data.linkedin}"><img
                            src="./media/icons/linkedin-white.png" alt="icon-linkedin-white" class="icon"></a>
                    <img src="./media/icons/website-white.png" alt="icon-link-white" class="icon">
                </div>
            </div>
            <p>${data.desc}</p>
    </div>
    `;
}

export default createWhiteDesc;