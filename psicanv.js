//Canvas and CanvasContext init
let psicanvas = document.getElementById("psicanv");
let psicanvasctx = psicanvas.getContext('2d');

function init_canvas() {
    psicanvasctx.fillStyle = "#FF0000";
    psicanvasctx.font = "20px Arial";
}

init_canvas();

//Game Var init
let score = 0;
let strscore = score.toString();
let scorexpos = 128;
let a = 0;
let b = 0;
let strcalc = a.toString() + ' + ' + b.toString() + ' =';
let calcxpos = 107;
let calcres = a + b;
let strcalcres = calcres.toString();
let calcupd = true;
let current = "";
let currentxpos = 120;

//Usefull function
function write_score() {
    strscore = score.toString();
    scorexpos = parseInt(128 - strscore.length * 6 / 2);
    psicanvasctx.fillText(strscore, scorexpos, 25);
}

function write_calc() {
    strcalc = a.toString() + ' + ' + b.toString() + ' =';
    calcxpos = parseInt(107 - strcalc.length * 6 / 2);
    psicanvasctx.fillText(strcalc, calcxpos, 50);
}

function write_current() {
    currentxpos = parseInt(120 - current.length * 6 / 2);
    psicanvasctx.fillText(current, currentxpos, 81);
}

function randint(min, max) {
    return parseInt(Math.random() * (max-min) + min);
}

function get_rand_calc() {
    a = randint(0, 1001);
    b = randint(0, 1001);
    calcres = a + b;
    strcalcres = calcres.toString();
    write_calc();
}

function update() {
    if (calcupd) {
        psicanvasctx.clearRect(0, 0, 256, 256);
        write_score();
        current = "";
        get_rand_calc();
    }
    else {
        psicanvasctx.clearRect(0, 0, 256, 256);
        write_score();
        write_calc();
        write_current();
    }
}

function main(event) {
    let code = event.code;
    calcupd = false;
    if (code == "Digit1") {
        current += "1";
    }
    if (code == "Digit2") {
        current += "2";
    }
    if (code == "Digit3") {
        current += "3";
    }
    if (code == "Digit4") {
        current += "4";
    }
    if (code == "Digit5") {
        current += "5";
    }
    if (code == "Digit6") {
        current += "6";
    }
    if (code == "Digit7") {
        current += "7";
    }
    if (code == "Digit8") {
        current += "8";
    }
    if (code == "Digit9") {
        current += "9";
    }
    if (code == "Digit0") {
        current += "0";
    }
    if (code == "Numpad1") {
        current += "1";
    }
    if (code == "Numpad2") {
        current += "2";
    }
    if (code == "Numpad3") {
        current += "3";
    }
    if (code == "Numpad4") {
        current += "4";
    }
    if (code == "Numpad5") {
        current += "5";
    }
    if (code == "Numpad6") {
        current += "6";
    }
    if (code == "Numpad7") {
        current += "7";
    }
    if (code == "Numpad8") {
        current += "8";
    }
    if (code == "Numpad9") {
        current += "9";
    }
    if (code == "Numpad0") {
        current += "0";
    }
    if (code == "Backspace") {
        if (current.length > 0) {
            current = current.slice(0,current.length-1);
        }
    }
    if (code == "Enter") {
        if (current == strcalcres) {
            if (calcres >= 210) {
                score += parseInt(calcres / randint(1,10));
            }
            else {
                score++;
            }
        }
        calcupd = true;
    }
    if (code == "NumpadEnter") {
        if (current == strcalcres) {
            if (calcres >= 210) {
                score += parseInt(calcres / randint(1,10));
            }
            else {
                score++;
            }
        }
        calcupd = true;
    }
    update()
}

update()

document.addEventListener('keydown', main);
