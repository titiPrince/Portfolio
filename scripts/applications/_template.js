let canvas = document.getElementById('');
canvas.ctx = canvas.getContext('2d')
canvas.ti = new tiCanvas(canvas_who);

canvas.app_drawIcon = function() {

    this.style.backgroundColor = 'white';
}

canvas.app_clearIcon = function() {
    this.style.backgroundColor = 'transparent';
}

canvas.app_start = function() {

}

canvas.app_pause = function() {
    
}

canvas.app_stop = function() {
    
}

canvas.app_display = function(display = true) {

}

canvas.app_save = function() {

}

canvas.app_back = function() {

}