let canvas_who = document.getElementById('app-who-i-am');
canvas_who.ctx = canvas_who.getContext('2d')
canvas_who.ti = new tiCanvas(canvas_who);

canvas_who.app_drawIcon = function () {
    this.style.backgroundColor = '#ea9600';
    this.ti.refreshSize();

    let head = new tiCircle({
        x: this.width / 2,
        y: this.height / 2,
        radius: vh_to_px(2),
        fillColor: "white",
    })

    let body = new tiCircle({
        x: this.width / 2,
        y: this.height + vh_to_px(1),
        radius: vh_to_px(4),
        fillColor: "white",
    })
    
    this.ti.add(body, head);
}

canvas_who.app_clearIcon = function() {
    this.ti.erase();
}

canvas_who.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();

    let background = new tiRect({
        x: this.width/2 - vh_to_px(23),
        y: vh_to_px(7),
        w: vh_to_px(46),
        h: vh_to_px(78),
        fillColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: vh_to_px(1)
    })

    let title = new tiText({
        x: this.width/2,
        y: vh_to_px(10),
        text: "Bonjour,",
        size: vh_to_px(3),
        fillColor: "white",
        police: "Lato",
        textBaseline: "top"
    })

    let summary = new tiTextArea({
        x: this.width/2 - vh_to_px(20),
        y: vh_to_px(20),
        text: "Actuellement étudiant en informatique à l'école EPITECH de Rennes, je suis à la recherche d'une alternance en tant que développeur.\nPassionné par la programmation informatique, je suis motivé et déterminé à mettre mes compétences au service de projets ambitieux. Rigoureux et curieux, je suis convaincu que cette expérience professionnelle en entreprise me permettra de développer mes compétences techniques et d'acquérir une expérience concrète dans le domaine du développement.",
        lineHeight: vh_to_px(2.8),
        size: vh_to_px(2.1),
        fillColor: "#eee",
        police: "Lato",
        width: vh_to_px(40),
        textBaseline: "top"
    })

    let name = new tiText({
        x: this.width/2,
        y: vh_to_px(78),
        text: "FORTIN EVAN",
        size: vh_to_px(2.5),
        fillColor: "white",
        police: "Lato",
        textBaseline: "top"
    })

    this.ti.add(background, title, summary, name)
}

canvas_who.app_pause = function() {
    
}

canvas_who.app_stop = function() {
    
}

canvas_who.app_display = function(show = false) {

}

canvas_who.app_save = function() {

}

canvas_who.app_back = function() {
    
}