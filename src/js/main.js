import { refs } from './refs';
import { colors } from './obj';

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor(color) {
    document.body.style.backgroundColor = color;
};

let intervalColorChange = null;

function start() {
    intervalColorChange = setInterval(randomNumber => {
        randomNumber = randomIntegerFromInterval(0, 5);
        setRandomColor(colors[randomNumber]);
    }, 1000);
    refs.stopBtn.removeAttribute('disabled');
    refs.startBtn.setAttribute('disabled', true);
};

function stop() {
    clearInterval(intervalColorChange);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
};