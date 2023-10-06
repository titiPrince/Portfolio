let canvas_cv = document.getElementById('app-cv');
canvas_cv.ctx = canvas_cv.getContext('2d')
canvas_cv.ti = new tiCanvas(canvas_cv);

canvas_cv.app_drawIcon = function() {
    this.style.backgroundColor = '#1e242e'; //#323b4c 
    this.ti.refreshSize();

    text = new tiText({
        x: this.width/2,
        y: this.height/2 + vh_to_px(0.5),
        text: "CV",
        size: vh_to_px(3),
        police: "astera",
        fillColor: "white",
    })
    
    this.ti.add(text);
}

canvas_cv.app_clearIcon = function() {
    this.ti.erase();
}

canvas_cv.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();

    let rightPart = new tiRect({
        x: this.width/2 - vh_to_px(10),
        y: 0,
        w: vh_to_px(55),
        h: vh_to_px(100),
        fillColor: "white",
    })

    let leftPart = new tiRect({
        x: this.width/2 - vh_to_px(45),
        y: 0,
        w: vh_to_px(55),
        h: vh_to_px(100),
        fillColor: "#323b4c",
    })

    var rightContainer = new tiGroup(0, 0)

    let firstName = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(10),
        size: vh_to_px(4),
        text: "Evan",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
    })

    let lastName = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(16),
        size: vh_to_px(4),
        text: "FORTIN",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "900"
    })

    let summary = new tiTextArea({
        x: this.width/2 - vh_to_px(40),
        y: vh_to_px(42),
        text: "Actuellement étudiant en informatique à l'école EPITECH de Rennes, je suis à la recherche d'une alternance en tant que développeur. Passionné par la programmation informatique, je suis motivé et déterminé à mettre mes compétences au service de projets ambitieux. Rigoureux et curieux, je suis convaincu que cette expérience professionnelle en entreprise me permettra de développer mes compétences techniques et d'acquérir une expérience concrète dans le domaine du développement.",
        lineHeight: vh_to_px(2),
        size: vh_to_px(1),
        fillColor: "#eee",
        police: "Lato",
        width: vh_to_px(25),
        textBaseline: "top"
    })

    let titleProfile = new tiText({
        x: this.width/2 - vh_to_px(40),
        y: vh_to_px(36),
        size: vh_to_px(2),
        text: "PROFILE",
        fillColor: "white",
        police: "Lato",
        textAlign: "left"
    })

    let titleKnows = new tiText({
        x: this.width/2 - vh_to_px(40),
        y: vh_to_px(75),
        size: vh_to_px(2),
        text: "MAITRISES",
        fillColor: "white",
        police: "Lato",
        textAlign: "left"
    })

    let knows = new tiTextArea({
        x: this.width/2 - vh_to_px(40),
        y: vh_to_px(81),
        text: "•      Python\n•      PHP\n•      Javascript\n•      C#\n•      C / C++",
        lineHeight: vh_to_px(2.2),
        size: vh_to_px(1.3),
        fillColor: "#eee",
        police: "Lato",
        width: vh_to_px(25),
        textBaseline: "top"
    })

    let mainTitle = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(21.2),
        size: vh_to_px(1.8),
        text: "Développeur en alternance",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "bold",
    })

    let mainSubTitle = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(24),
        size: vh_to_px(1.4),
        text: "(3 jours par semaine en entreprise)",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left"
    })

    let contacts = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(27),
        size: vh_to_px(1.4),
        text: "06 29 93 49 86     fortin.evan.eric@gmail.com",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "bold",
    })

    let titleFormations = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(36),
        size: vh_to_px(2),
        text: "FORMATIONS",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left"
    })

    let btsTitle = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(42),
        size: vh_to_px(1.2),
        text: "BTS SNIR | 2020 - 2022",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "bold",
    })

    let btsDesc = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(43.5),
        size: vh_to_px(1),
        text: "Systèmes Numériques option Informatique et Réseaux",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left"
    })

    let btsSchool = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(46),
        size: vh_to_px(1.2),
        text: "Jules Verne, Mondeville",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "bold"
    })

    let btsGoods = new tiTextArea({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(49),
        text: "•    Matières fortes : Informatique et réseaux (17/20) ; Mathématiques (16/20) ; Anglais (15/20)",
        lineHeight: vh_to_px(2.2),
        size: vh_to_px(1.2),
        fillColor: "#777",
        police: "Lato",
        width: vh_to_px(40),
        textBaseline: "top"
    })

    let sti2dTitle = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(56),
        size: vh_to_px(1.2),
        text: "BAC STI2D | 2018 - 2019",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "bold",
    })

    let sti2dDesc = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(57.5),
        size: vh_to_px(1),
        text: "Sciences et Technologies de L’industrie et du Développement Durable",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left"
    })

    let sti2dSchool = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(60),
        size: vh_to_px(1.2),
        text: "Jules Verne, Mondeville",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left",
        weight: "bold"
    })

    let titleSkills = new tiText({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(68),
        size: vh_to_px(2),
        text: "COMPÉTENCES",
        fillColor: "#323b4c",
        police: "Lato",
        textAlign: "left"
    })

    let skills = new tiTextArea({
        x: this.width/2 - vh_to_px(5),
        y: vh_to_px(74),
        text: "•    Autonomie\n•    Expérience en programmation acquise de manière autodirigée\n•    Travail en équipe\n•    Sens du service\n•    Écoute active\n•    Organisation efficace",
        lineHeight: vh_to_px(2.5),
        size: vh_to_px(1.2),
        fillColor: "#777",
        police: "Lato",
        width: vh_to_px(40),
        textBaseline: "top"
    })
    
    this.ti.add(leftPart, rightPart, rightContainer, summary, titleProfile, titleKnows, knows,
        titleFormations, mainTitle, mainSubTitle, btsTitle, btsDesc, btsSchool, btsGoods,
        sti2dTitle, sti2dDesc, sti2dSchool, titleSkills, skills, contacts
    );
    rightContainer.add(firstName, lastName);

    let image_profil = document.getElementById("app_assets_cv_evan_image");

    this.ctx.drawImage(
        image_profil, 
        this.width/2 - vh_to_px(40), 
        vh_to_px(5), 
        vh_to_px(25), 
        vh_to_px(25)
    )
}

canvas_cv.app_pause = function() {
    
}

canvas_cv.app_stop = function() {
    
}

canvas_cv.app_display = function(display = true) {

}

canvas_cv.app_save = function() {

}

canvas_cv.app_back = function() {

}