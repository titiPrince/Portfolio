let canvas_torch = document.getElementById('app-torch');
canvas_torch.ctx = canvas_torch.getContext('2d')
canvas_torch.ti = new tiCanvas(canvas_torch);

canvas_torch.app_drawIcon = function() {

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
        text: "Torch",
        size: vh_to_px(1.2),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_torch.app_clearIcon = function() {
    this.ti.erase();
}

canvas_torch.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_torch.app_pause = function() {
    
}

canvas_torch.app_stop = function() {
    
}

canvas_torch.app_display = function(display = true) {

}

canvas_torch.app_save = function() {

}

canvas_torch.app_back = function() {

}