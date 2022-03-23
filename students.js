class Student{
    constructor (name, firstname, age, city, whiteimg, redimg, skills, desc, linkedin, github) {
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.city = city;
        this.whiteimg = whiteimg;
        this.redimg = redimg;
        this.skills = skills;
        this.desc = desc;
        this.linkedin = linkedin;
        this.github = github;
    }
}

const student = [
    new Student(
        "Alexandra",
        "De Brito",
        "30",
        "Reims",
        "./media/pictures/alexandra-1-white.png",
        "./media/pictures/alexandra-1-red.png",
        "Créativité, ouverture d'esprit, organisée et polyvalante",
        "Graphiste de formation, j'ai touché à différents métiers par la suite. Grâce à cette formation je souhaite ajouter des nouveaux outils à ma palette; pouvoir mêler mon côté créatif hérité du graphisme au développement web, dans le but de trouver une place en entreprise où je pourrais m’épanouir et continuer à apprendre, et par la suite, pourquoi pas me lancer en freelance.",
        "https://www.linkedin.com/in/alexandrardrgs/",
        "https://github.com/Alexandra-Rdrgs"
    ),
    new Student(
        "Jeffrey",
        "Rigaux",
        "22",
        "Saint Eulien",
        "./media/pictures/jeffrey-1-white.png",
        "./media/pictures/jeffrey-1-red.png",
        "Travail d'équipe, créativité, déterminé",
        "Ancien étudiant en BTS SNIR (Système Numérique Informatique et Réseaux) j'aime sortir, faire du sport et jouer aux jeux vidéos. Je souhaite devenir développeur web mobile pour le moment puis m'orienter vers le jeux vidéos par la suite.",
        "https://www.linkedin.com/in/jeffrey-rigaux-086463234/",
        "https://github.com/PiXeleum"
    ),
    new Student(
        "Quentin",
        "Samuel",
        "22",
        "Reims",
        "./media/pictures/quentin-1-white.png",
        "./media/pictures/quentin-1-red.png",
        "Travail d'équipe, à l'écoute, engagé et compréhensif",
        "description",
        "https://www.linkedin.com/in/quentin-samuel-7a9092235/",
        "https://github.com/QuentinSamuel"
    ),
    new Student(
        "Théo",
        "Depelsemacker",
        "24",
        "Reims",
        "./media/pictures/theo-1-white.png",
        "./media/pictures/theo-1-red.png",
        "Leadership, adaptabilité, communication et jovialité",
        "description",
        "https://www.linkedin.com/in/theode/",
        "https://github.com/theoDep"
    ),
    new Student(
        "Louis",
        "Dufourmantelle",
        "23",
        "Reims",
        "./media/pictures/louis-1-white.png",
        "./media/pictures/louis-1-red.png",
        "Curieux, patient, empathique et percévérant",
        "description",
        "https://www.linkedin.com/in/louis-dufourmantelle-503462234/",
        "https://github.com/loulou0704"
    ),
    new Student(
        "Simon",
        "Duc",
        "33",
        "Reims",
        "./media/pictures/simon-1-white.png",
        "./media/pictures/simon-1-red.png",
        "Curiosité, rigeur, travail d'équipe et autonomie",
        "description",
        "https://www.linkedin.com/in/simon-duc-858481213/",
        "https://github.com/Simon-Duc"
    ),
    new Student(
        "Valentin",
        "Morette",
        "27",
        "Rethel",
        "./media/pictures/valentin-1-white.png",
        "./media/pictures/valentin-1-red.png",
        "Travail en équipe, curieux, flexible",
        "Ancien comptable, en reconversion dans le développement Web, j'aime la moto, la piscine et les jeux vidéo. Mes objectifs sont d'exceller dans ce nouveau domaine pour dans un premier temps trouver un travail que j'aime et faire mes premières armes pour ensuite pouvoir faire des projets personnels et pourquoi pas créer ma propre entreprise.",
        "https://www.linkedin.com/in/valentin-morette-bb010a17a/",
        "https://github.com/Birious"
    ),
    new Student(
        "Jaafar",
        "Cherif",
        "33",
        "Reims",
        "./media/pictures/jaafar-2-white.png",
        "./media/pictures/jaafar-2-red.png",
        "Adaptabilité, communication, travail d'équipe et perséverance",
        "Après quelques années dans l'éducation en tant qu'assistant pédagogique puis professeur des écoles contractuel, la période de la pandémie m'a donné le temps de réfléchir à trouver une voie dans laquelle m'épanouir. Le développement web correspondait le mieux à ce désir. Mes hobbies : les arts visuels, la littérature japonaise, et les jeux de toutes sortes",
        "https://www.linkedin.com/in/louis-dufourmantelle-503462234/",
        "https://github.com/loulou0704"
    )
]

export default student;