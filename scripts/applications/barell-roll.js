let canvas_barell = document.getElementById('app-barell-roll');
canvas_barell.ctx = canvas_barell.getContext('2d')
canvas_barell.ti = new tiCanvas(canvas_barell);


canvas_barell.app_drawIcon = function() {

    this.style.backgroundColor = '#ffb9b9';
    this.ti.refreshSize();

    barell = new tiCircle({
        x: this.width/2,
        y: this.height/2,
        radius: vh_to_px(2),
        fillColor: "#9f2f2f",
    })

    ground = new tiRect({
        x: 0,
        y: this.height/2 + vh_to_px(0.5),
        w: this.width,
        h: this.height/2 - vh_to_px(0.5),
        radius: vh_to_px(2),
        fillColor: "#1e242e",
    })
    
    this.ti.add(ground, barell);
}

canvas_barell.app_clearIcon = function() {
    this.ti.erase();
}

canvas_barell.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();

    text = new tiText({
        x: this.width/2,
        y: this.height/2 + vh_to_px(0.5),
        text: "DO A BARELL ROLL",
        size: vh_to_px(3),
        police: "astera",
        fillColor: "white",
    })
    
    this.ti.add(text);

    doABarrelRoll()
}

canvas_barell.app_pause = function() {
    
}

canvas_barell.app_stop = function() {
    
}

canvas_barell.app_display = function(display = true) {

}

canvas_barell.app_save = function() {

}

canvas_barell.app_back = function() {

}