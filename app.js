
const red = document.querySelectorAll('.redColor');
const orange = document.querySelectorAll('.orangeColor');
const green = document.querySelectorAll('.greenColor');
const cars = document.querySelectorAll('.car');
let h = 120;
let v = 120;
function startH() {
    red[0].style.opacity = 1;
    setTimeout(() => {
        red[0].style.opacity = 0.2;
        orange[0].style.opacity = 1;
        setTimeout(() => {
            orange[0].style.opacity = 0.2;
            green[0].style.opacity = 1;
            const interval = setInterval(() => {
                if (h < window.innerWidth - 100) {
                    h++;
                    cars[0].style.left = h + 'px';
                } else {
                    clearInterval(interval);
                    green[0].style.opacity = 0.2;
                    startV();
                }
            }, 5);
        }, 1000);
    }, 2000);
}
function startV() {
    red[1].style.opacity = 1;
    setTimeout(() => {
        red[1].style.opacity = 0.2;
        orange[1].style.opacity = 1;
        setTimeout(() => {
            orange[1].style.opacity = 0.2;
            green[1].style.opacity = 1;
            const interval = setInterval(() => {
                if (v < window.innerHeight - 150) {
                    v++;
                    cars[1].style.bottom = v + 'px';
                } else {
                    clearInterval(interval);
                    green[1].style.opacity = 0.2;
                }
            }, 5);
        }, 1000);
    }, 2000);
}
startH();