// 3d scrool

const zSpacing = -1000;
let lastPos = zSpacing / 5;

const $frames = document.getElementsByClassName('frame');
const framesArray = Array.from($frames);

const zVals = [];

framesArray.forEach((n, i) => {
    zVals.push((i * zSpacing) + zSpacing);
});

// refactor with lyambda
window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    framesArray.forEach((n, i) => {
        zVals[i] += delta * -3;

        const frame = framesArray[i];
        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing / 1.8) ? 1 : 0;

        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity};`);
    });
};

// audio

const audioBtn = document.getElementById('audioBtn');
const audio = document.getElementById('audio')

audioBtn.onclick = function (e) {
    audioBtn.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();

};

window.onfocus = function () {
    audioBtn.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function () {
    audio.pause();
};

window.scrollTo(0,1);