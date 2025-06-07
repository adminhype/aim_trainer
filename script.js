function init() {
    getCircle();
}
function getCircle() {
    const myCircle = document.getElementById('my-circle');
    moveCircle(myCircle);
}
function moveCircle(mo) {
    mo.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // random x coordinate
    mo.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // random y coordiante
    mo.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`; // random color
}