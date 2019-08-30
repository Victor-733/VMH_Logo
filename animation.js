const tl = new TimelineMax({repeat: -1});

tl.to("#smoke1", 2, {opacity: 0, y: -90});
tl.to("#smoke2", 2, {opacity: 0, y: -90}, "-=1");

const logo = document.getElementById("background");
logo.addEventListener("mouseover", splat);

let timeline = new TimelineMax({});
isplaying = false;
function splat() {
    if(isplaying == false){
        isplaying = true;
        console.log(isplaying);
        timeline.to(".logo", 0.2, {y: -30});
        timeline.to(".logo", 0.5, {y: 0, ease:Bounce.easeOut});
        isplaying = false;
        console.log(isplaying);
    }
}

