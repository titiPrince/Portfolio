let canvas_game2 = document.getElementById('app-game2');
canvas_game2.ctx = canvas_game2.getContext('2d')
canvas_game2.ti = new tiCanvas(canvas_game2);

canvas_game2.app_drawIcon = function() {

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
        text: "GAME 2",
        size: vh_to_px(1.2),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_game2.app_clearIcon = function() {
    this.ti.erase();
}

canvas_game2.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_game2.app_pause = function() {
    
}

canvas_game2.app_stop = function() {
    
}

canvas_game2.app_display = function(display = true) {

}

canvas_game2.app_save = function() {

}

canvas_game2.app_back = function() {

}