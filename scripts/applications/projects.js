let canvas_projects = document.getElementById('app-projects');
canvas_projects.ctx = canvas_projects.getContext('2d')
canvas_projects.ti = new tiCanvas(canvas_projects);

canvas_projects.app_drawIcon = function() {

    this.style.backgroundColor = 'white';
    this.ti.refreshSize();

    let commingSoon = new tiText({
        x: this.width/2,
        y: this.height/2 + vh_to_px(1.5),
        text: "Comming soon",
        size: vh_to_px(0.75),
        police: "Lato",
        fillColor: "black",
    })

    let title = new tiText({
        x: this.width/2,
        y: this.height/2 + vh_to_px(0.3),
        text: "PROJECTS",
        size: vh_to_px(1),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_projects.app_clearIcon = function() {
    this.ti.erase();
}

canvas_projects.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_projects.app_pause = function() {
    
}

canvas_projects.app_stop = function() {
    
}

canvas_projects.app_display = function(display = true) {

}

canvas_projects.app_save = function() {

}

canvas_projects.app_back = function() {

}