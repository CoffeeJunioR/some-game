const gamepool = document.querySelector('.gamepool');
const gamepoolItems = gamepool.querySelectorAll('.gamepool_item');
const img = document.createElement('img');

function setRandomPool(gamepoolItems) {
    let randomItem = gamepoolItems[(Math.random()*10).toFixed(0)];
    img.setAttribute('src', '../img/goblin.png');
    img.className = 'goblin_img';
    randomItem.appendChild(img);
};

function removeImg(img) {
    img.remove();
};

setRandomPool(gamepoolItems);

setInterval(() => {
    removeImg(img);
}, 1500);

setInterval(() => {
    setRandomPool(gamepoolItems);
}, 1500);