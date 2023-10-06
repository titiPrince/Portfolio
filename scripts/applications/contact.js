let canvas_contact = document.getElementById('app-contact');
canvas_contact.ctx = canvas_contact.getContext('2d')
canvas_contact.ti = new tiCanvas(canvas_contact);

canvas_contact.app_drawIcon = function() {
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
        text: "Contact",
        size: vh_to_px(1.2),
        police: "astera",
        fillColor: "black",
    })
    
    this.ti.add(commingSoon, title);
}

canvas_contact.app_clearIcon = function() {
    this.ti.erase();
}

canvas_contact.app_start = function() {
    this.ti.refreshSize();
    this.ti.clear();
    this.app_drawIcon();
}

canvas_contact.app_pause = function() {
    
}

canvas_contact.app_stop = function() {
    
}

canvas_contact.app_display = function(display = true) {

}

canvas_contact.app_save = function() {

}

canvas_contact.app_back = function() {

}