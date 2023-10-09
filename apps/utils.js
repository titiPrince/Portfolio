function switchState(app, state) {
    app.app_currentDisplay.style.display = 'none';
    app.app_currentDisplay = state;
    app.app_currentDisplay.style.display = 'initial';
}