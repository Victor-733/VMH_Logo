const tl = new TimelineMax({repeat: -1});

tl.to("#smoke1", 2, {opacity: 0, y: -90});
tl.to("#smoke2", 2, {opacity: 0, y: -90}, "-=1");

const logo = document.getElementById("logo");
const hoverOver = logo.addEventListener("mouseover", splat);

function splat() {
    TweenMax.to("#logo", 0.5, {y: -80});
}

