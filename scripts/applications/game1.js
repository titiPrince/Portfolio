let canvas_game1 = document.getElementById('app-game1');
canvas_game1.ctx = canvas_game1.getContext('2d')
canvas_game1.ti = new tiCanvas(canvas_game1);

canvas_game1.app_drawIcon = function() {

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
        text: "GAME 1",
        size: vh_to_px(1.2),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_game1.app_clearIcon = function() {
    this.ti.erase();
}

canvas_game1.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_game1.app_pause = function() {
    
}

canvas_game1.app_stop = function() {
    
}

canvas_game1.app_display = function(display = true) {

}

canvas_game1.app_save = function() {

}

canvas_game1.app_back = function() {

}