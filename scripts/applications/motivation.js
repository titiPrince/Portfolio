let canvas_motivation = document.getElementById('app-motivation');
canvas_motivation.ctx = canvas_motivation.getContext('2d')
canvas_motivation.ti = new tiCanvas(canvas_motivation);

canvas_motivation.app_drawIcon = function() {

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
        text: "Motivation",
        size: vh_to_px(1),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_motivation.app_clearIcon = function() {
    this.ti.erase();
}

canvas_motivation.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_motivation.app_pause = function() {
    
}

canvas_motivation.app_stop = function() {
    
}

canvas_motivation.app_display = function(display = true) {

}

canvas_motivation.app_save = function() {

}

canvas_motivation.app_back = function() {

}