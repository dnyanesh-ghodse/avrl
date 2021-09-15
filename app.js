const topLeft = document.querySelector('.top_left')
const topRight = document.querySelector('.top_right')
const bottomRight = document.querySelector('.bottom_right')
const bottomLeft = document.querySelector('.bottom_left')

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const move = () => {
    topLeft.style.animation = "moveRight 2s ease-in-out infinite";
    topRight.style.animation = "moveDown 2s ease-in-out infinite";
    bottomLeft.style.animation = "moveDown 2s ease-in-out infinite";
    bottomRight.style.animation = "moveLeft 2s ease-in-out infinite";

}
startBtn.addEventListener('click', move)

const stop = () => {
    topLeft.style.animation = "";
    topRight.style.animation = "";
    bottomLeft.style.animation = "";
    bottomRight.style.animation = "";
}

stopBtn.addEventListener('click', stop)