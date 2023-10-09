window.addEventListener('load', function(e) {
    let app = document.querySelector("div.app#app-template");

    app.app_icon = app.querySelector("div.app-icon");
    app.app_starting = app.querySelector("div.app-starting");
    app.app_running = app.querySelector("div.app-running");

    app.app_currentDisplay = app.app_icon;

    app.app_icon = function() {
        switchState(this, this.app_icon);
    }

    app.app_load = function() {
        switchState(this, this.app_starting);
    }

    app.app_start = function() {
        switchState(this, this.app_running);
    }

    app.app_pause = function() {

    }

    app.app_stop = function() {

    }

    app.app_display = function(display = true) {

    }

    app.app_save = function() {

    }

    app.app_back = function() {

    }
}, {once: true});