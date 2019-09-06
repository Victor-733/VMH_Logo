const tl = new TimelineMax({repeat: -1});

tl.to("#smoke1", 2, {opacity: 0, y: -90});
tl.to("#smoke2", 2, {opacity: 0, y: -90}, "-=1");

const logo = document.getElementById("cup-handle");
logo.addEventListener("mouseenter", splat);

let timeline = new TimelineMax({
    onComplete(){
        isplaying = false;
        timeline.pause(0);
    }
});

isplaying = false;

timeline.to(".logo", 0.2, {y: -30});
timeline.to(".logo", 0.5, {y: 0, ease:Bounce.easeOut});

timeline.pause();

function splat() {
    if(!isplaying){
        timeline.play();
    }
}

const background = document.getElementById("background");
const smokeStain = document.getElementById("stains-smokes");
background.addEventListener("click", pop);
logo.addEventListener("click", cupPop);
smokeStain.addEventListener("click", stainPop);

function popAnimate(timeline){
    timeline.to("#cup-handle", 0.05, {y: -5});
    timeline.to("#cup-handle", 0.05, {y: 0});
}

function pop(){
    const clickTimeline = new TimelineMax({});
    popAnimate(clickTimeline);
}

function cupPop(){
    const cupTimeline = new TimelineMax({});
    popAnimate(cupTimeline);
}

function stainPop(){
    const stainTimeLine = new TimelineMax({});
    popAnimate(stainTimeLine);
}

