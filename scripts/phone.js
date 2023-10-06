/*

TODO :

            +++ Make applications + icons
            ++ Working on real phones + responsive on mobile (remove borders and flip)
            + Navigation buttons: actions + better animation
            + Add a way to activate the animation of the phone's flipping
    - Add camera on the front of the phone
    -- Screen box shadow depend of the average color of the application content
    --- Add a real simulated battery + charging animation
    --- Add pin notifications on applications, because why not
    --- Settings: able to change background + rainbow screen + language

*/

const PHONE = document.getElementById('phone');
const BORDERS = document.getElementById('borders');
const SCREEN = document.getElementById('screen');
const CAMERA = document.getElementById('camera');
const TOP_BAR = document.getElementById('notif-bar');
const PAGES = document.getElementsByClassName('page');
const BOTTOM_BAR = document.getElementById('navigation-bar');
const BTN_BACK = document.getElementById('btn-back');
const BTN_HOME = document.getElementById('btn-home');
const BTN_RECENT = document.getElementById('btn-recent');

const PHONE_THIN = document.getElementById('thin');
const PHONE_BACK = document.getElementById('back');

const HOUR = document.getElementById('hour');
const DAY = document.getElementById('day');

let isSliding = false;
let isInApp = false;
let currentApp = null;
let isOnPhone = false;
let slidingStartCoords = {x: 0, y: 0};
let slidingOffset = {x: 0, y: 0};
let slidingCurrent = {x: 0, y: 0};
const slidingStep = 55; // vh
const slidingStepOnPhone = 100; // vw
const slidingMultiplier = 0.107;
const slidingMultiplierOnPhone = 0.5;

function startApplication(evt) {
    if (isInApp) return
    isInApp = true

    canvas = evt.target;
    currentApp = canvas;
    canvas.classList.remove('apphover');
    canvas.app_clearIcon();

    let isFullscreen = canvas.classList.contains('fullscreen');
    
    canvas.style.animation = "appopenning 2s ease-in-out 0s 1";

    SCREEN.style.boxShadow = `0vh 0vh 3vh 0.3vh ${canvas.style.backgroundColor}`
    CAMERA.style.boxShadow = `inset 0vh -0.5vh 2vh 0vh ${canvas.style.backgroundColor}`
    if (isFullscreen && !isOnPhone) BORDERS.style.animation = "phonezoom 2s ease-in-out 0s 1";

    
    setTimeout(() => {
        canvas.classList.add("expanded");

        if (isFullscreen && !isOnPhone) {
            SCREEN.style.contain = 'none';
            TOP_BAR.style.zIndex = '0';
            BOTTOM_BAR.style.zIndex = '-1';

            for (let page of PAGES) {
                if ([...page.children].includes(canvas)) continue
                page.style.zIndex = '-1';
            }
        }
    }, 1900)

    setTimeout(() => {
        canvas.app_start()
    }, 2010)
}

function mouseEnterApplication(evt) {
    if (isInApp) return
    canvas = evt.target;

    canvas.classList.add('apphover');
}

function mouseLeaveApplication(evt) {
    if (isInApp) return
    canvas = evt.target;

    canvas.classList.remove('apphover');
}

function animateNavBtn() {
    this.children[0].style.animation = 'navbtnclick 400ms ease-in-out 0s';

    setTimeout(() => {
        this.children[0].style.animation = 'initial';
    }, 400)
}


function buttonBackClicked() {
    if (isInApp) currentApp.app_back();
}

function buttonHomeClicked() {
    if (isInApp) {
        currentApp.app_pause();
        isInApp = false;
        SCREEN.style.boxShadow = "0vh 0vh 3vh 0.3vh #6464de";
        CAMERA.style.boxShadow = `inset 0vh -0.5vh 2vh 0vh #6464de`;
        canvas.style.animation = "initial";
        currentApp.classList.remove('expanded');
        currentApp.app_drawIcon();
        currentApp = null;
    }

    let stepResponsive = isOnPhone ? slidingStepOnPhone : slidingStep;

    let count = 0
    for (let page of PAGES) {
        page.style.transform = isOnPhone ? `translate(${stepResponsive * count}vw, -40vh)` : `translate(${stepResponsive * count}vh, -40vh)`;
        
        count++;
    }

    slidingCurrent = {x: 0, y: slidingCurrent.y};
    slidingOffset = {x: 0, y: 0};
}

function buttonRecentClicked(evt) {
    
}


function waitTransition(el, name, callback) {
    el.addEventListener('transitionend', function transitionEnd(tr) {
        if (tr.propertyName.includes(name)) {
            el.removeEventListener('transitionend', transitionEnd, false)
            callback()
        }
    }, false)
}

function getPointerPosition(evt) {
    if (evt.type.includes("mouse")) {
        return {x: evt.pageX, y: evt.pageY}
    }
    else {
        let touch = evt.touches[0];
        return {x: touch.pageX, y: touch.pageY}
    }
}

function pointerDown(evt) {
    if (isInApp) return
    isSliding = true

    let pointer = getPointerPosition(evt);

    slidingStartCoords = {
        x: pointer.x, 
        y: pointer.y
    }

    for (let page of PAGES) {
        page.style.transition = 'initial';
    }
}

function pointerMove(evt) {
    if (isInApp) return
    if (!isSliding) return

    let pointer = getPointerPosition(evt);

    slidingOffset = {
        x: (slidingCurrent.x + (slidingStartCoords.x - pointer.x) * (isOnPhone ? slidingMultiplierOnPhone : slidingMultiplier)),
        y: (slidingCurrent.y + (slidingStartCoords.y - pointer.y) * (isOnPhone ? slidingMultiplierOnPhone : slidingMultiplier))
    }

    let count = 0
    for (let page of PAGES) {
        page.style.transform = isOnPhone ? `translate(${-slidingOffset.x + (slidingStepOnPhone * count)}vw, -40vh)` : `translate(${-slidingOffset.x + (slidingStep * count)}vh, -40vh)`;
        
        count++;
    }
}

function stopSliding() {
    if (isInApp) return
    isSliding = false
    let stepResponsive = isOnPhone ? slidingStepOnPhone : slidingStep;

    for (let page of PAGES) {
        page.style.transition = 'transform 500ms ease';
    }

    slidingCurrent = slidingOffset;

    let nearestStep = 0
    let diff = null;

    let cdiff;
    for (let step = 0; step < PAGES.length; step++) {
        cdiff = Math.abs(step * stepResponsive - slidingCurrent.x)

        if (diff === null) diff = cdiff;

        if (cdiff < diff && diff != null) {
            diff = cdiff;
            nearestStep = -(step * stepResponsive)
        }
    }

    let count = 0
    for (let page of PAGES) {
        page.style.transform = isOnPhone ? `translate(${nearestStep + (stepResponsive * count)}vw, -40vh)` : `translate(${nearestStep + (stepResponsive * count)}vh, -40vh)`;
        
        count++;
    }

    slidingCurrent = {x: -nearestStep, y: slidingCurrent.y};
}


const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function updateClock() {
    let now = new Date();
    let time = ("0" + now.getHours()).slice(-2) + ':' + ("0" + (now.getMinutes())).slice(-2);
    let date = [DAYS[now.getDay()], now.getDate(), MONTHS[now.getMonth()]].join(' ');

    HOUR.innerHTML = time;
    DAY.innerHTML = date;

    setTimeout(updateClock, 1000 * 3);
}

window.getAspectRatio = function() {
    function gcd (a, b) {
        return (b === 0) ? a : gcd (b, a%b);
    }

    let w = screen.width;
    let h = screen.height;
    let r = gcd(w, h);

    return (w/r) / (h/r);
}

window.isMobile = function() {
    return window.getAspectRatio() <= 0.625;
};

window.addEventListener('load', function () {
    let navButtons = document.getElementsByClassName('nav-btn')
    isOnPhone = window.isMobile();

    let count = 0
    for (let page of PAGES) {
        for (let app of page.children) {
            if (app.tagName !== 'CANVAS') continue

            app.addEventListener('click', startApplication);
            app.addEventListener('mouseenter', mouseEnterApplication);
            app.addEventListener('mouseleave', mouseLeaveApplication);

            try {
                app.app_drawIcon()
            } catch (error) {}
        }

        page.style.transform = isOnPhone ? `translate(${slidingStepOnPhone * count}vw, -40vh)` : `translate(${slidingStep * count}vh, -40vh)`;
        count++;
    }

    if (!isOnPhone) {
        for (let btn of navButtons) {
            btn.addEventListener('click', animateNavBtn);
            // btn.addEventListener('mouseup', resetAnimationNavBtn);
        }

        SCREEN.addEventListener('mousedown', pointerDown);
        window.addEventListener('mouseleave', stopSliding);
        window.addEventListener('mouseup', stopSliding);
        window.addEventListener('mousemove', pointerMove);
    }
    else {
        window.addEventListener('touchstart', pointerDown);
        window.addEventListener('touchend', stopSliding);
        window.addEventListener('touchmove', pointerMove);
    }

    BTN_BACK.addEventListener('click', buttonBackClicked);
    BTN_HOME.addEventListener('click', buttonHomeClicked);
    BTN_RECENT.addEventListener('click', buttonRecentClicked);

    updateClock();
}, {once: true})





////////////////
// ANIMATIONS //
////////////////


function doABarrelRoll() {
    BORDERS.style.transform = 'rotateY(90deg)';

    PHONE_THIN.style.transition = 'transform 1s, width 1.4s, border-top-right-radius 1s, border-bottom-right-radius 1s, border-top-left-radius 1s, border-bottom-left-radius 1s';
    PHONE_THIN.style.visibility = 'visible';
    PHONE_THIN.style.transform = 'translate(2.5vh)';
    PHONE_THIN.style.width = '5vh';
    PHONE_THIN.style.borderRadius = '0vh';

    waitTransition(PHONE_THIN, 'width', () => {
        PHONE_THIN.style.transition = 'transform 500ms'
        PHONE_THIN.style.transform = 'translate(-2.5vh)';

        waitTransition(PHONE_THIN, 'transform', () => {
            PHONE_BACK.style.visibility = 'visible';
            PHONE_BACK.style.transform = 'rotateY(0deg)';
            
            PHONE_THIN.style.transition = 'transform 1.2s, width 1s, border-top-right-radius 0.5s, border-bottom-right-radius 0.5s, border-top-left-radius 0.5s, border-bottom-left-radius 0.5s'
            PHONE_THIN.style.transform = 'translate(-14vh)';
            PHONE_THIN.style.width = '28vh';
            PHONE_THIN.style.borderTopLeftRadius = '5vh';
            PHONE_THIN.style.borderBottomLeftRadius = '5vh';
            
            setTimeout(flipPhoneToFront, 3 * 1000)
        })
    })
}

function flipPhoneToFront() {
    PHONE_BACK.style.transform = 'rotateY(90deg)';

    PHONE_THIN.style.transition = 'transform 1.5s, width 1.4s, border-top-right-radius 1.8s, border-bottom-right-radius 1.8s, border-top-left-radius 1.8s, border-bottom-left-radius 1.8s';
    PHONE_THIN.style.width = '5vh';
    PHONE_THIN.style.borderRadius = '0vh';
    PHONE_THIN.style.transform = 'translate(-2.5vh)';
    PHONE_THIN.style.visibility = 'visible';

    waitTransition(PHONE_BACK, 'transform', () => {
        PHONE_BACK.visibility = 'hidden';

        PHONE_THIN.style.transition = 'transform 500ms';
        PHONE_THIN.style.transform = 'translate(2.5vh)';

        waitTransition(PHONE_THIN, 'transform', () => {
            BORDERS.style.transform = 'rotateY(0deg)';

            PHONE_THIN.style.transition = 'transform 1s, width 0.6s, border-top-right-radius 0.7s, border-bottom-right-radius 0.7s, border-top-left-radius 0.7s, border-bottom-left-radius 0.7s';
            PHONE_THIN.style.width = '28vh';
            PHONE_THIN.style.transform = 'translate(14vh)';
            PHONE_THIN.style.borderTopRightRadius = '6vh';
            PHONE_THIN.style.borderBottomRightRadius = '6vh';
            PHONE_THIN.style.visibility = 'hidden';
        })
    })
}