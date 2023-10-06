let canvas_settings = document.getElementById('app-settings');
canvas_settings.ctx = canvas_settings.getContext('2d')
canvas_settings.ti = new tiCanvas(canvas_settings);


canvas_settings.app_drawIcon = function() {

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
        text: "SETTINGS",
        size: vh_to_px(1),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_settings.app_clearIcon = function() {
    this.ti.erase();
}

canvas_settings.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_settings.app_pause = function() {
    
}

canvas_settings.app_stop = function() {
    
}

canvas_settings.app_display = function(display = true) {

}

canvas_settings.app_save = function() {

}

canvas_settings.app_back = function() {

}