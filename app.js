import Elements from "./elements.js"
import Timer from "./timer.js";
import Player from "./player.js";

const player = new Player();
const fullmoonEl = document.querySelector("#moon");
const crescentMoonEl = document.getElementById("crescentMoon");
const expEl = document.querySelector('#exp');
const hpEl = document.querySelector('#hp');
const lvlEl = document.querySelector('#lvl');


document.querySelector("#yesButton").style.visibility="hidden";  
document.querySelector("#noButton").style.visibility="hidden";
document.querySelector("#time").style.visibility="hidden";    
let moonButton = document.getElementById('moon'); 
moonButton.addEventListener("click", ()=> {
    console.log("hello");
    document.querySelector("#moon").style.visibility="hidden";  
    document.querySelector("#crescentMoon").style.visibility="visible"; 
    document.querySelector("#yesButton").style.visibility="visible";  
document.querySelector("#noButton").style.visibility="visible"; 
    introBox();
    if (document.querySelector("#moon").style.visibility="hidden") {
        let crescentmoonButton = document.getElementById('crescentMoon'); 
        crescentmoonButton.addEventListener("click", ()=> {
            console.log("ello gov");
            introBoxHide();
            document.querySelector("#moon").style.visibility="visible";  
            document.querySelector("#crescentMoon").style.visibility="hidden";  
        })
    }
})



function introBox() {
    const tl = gsap.timeline({ defaults: { duration: 1 } })
    document.querySelector(".introTextBox").style.visibility="visible";
    tl.to('.introTextBox', {x: '-50px', ease: "power4.out", opacity: 1 })
}
function introBoxHide() {
    const t2 = gsap.timeline({ defaults: {duration: 1} })
    t2.to('.introTextBox', {x: '50px', ease: "power4.out", opacity: 0 })
}


let yesBtn = document.getElementById('yesButton'); 
let textEl = document.getElementById('introText');
yesBtn.addEventListener("click", ()=> {
    textEl.innerHTML = `<p>That's great to hear. I wish you luck on your journey. Strength comes from experience
    and you would do well to become stronger before time runs out..</p>`
    startTimer();
    document.querySelector("#startgameStar").style.visibility="visible";
    document.querySelector("#yesButton").style.display="none";
    document.querySelector("#noButton").style.display="none";
    document.querySelector("#time").style.visibility="visible";
    
})

let noBtn = document.getElementById('noButton');
let textElB = document.getElementById('introText');
noBtn.addEventListener("click", ()=> {
    textElB.innerHTML = `<p>Uh oh... look out!!</p>`
    document.querySelector("#yesButton").style.display="none";
    document.querySelector("#noButton").style.display="none";
})

document.querySelector(".navBar").style.visibility="hidden";
document.querySelector("#hud").style.visibility="hidden";
document.querySelector("#startgameStar").style.visibility="hidden"; 
let starBtn = document.getElementById('startgameStar');
starBtn.addEventListener("click", ()=> {
    console.log("starclicked");
    gsap.fromTo("#hud", {autoAlpha: 0}, {autoAlpha: 1, duration: .5});
    document.querySelector("#hud").style.visibility="visible";
        
    gsap.fromTo(".navBar", {autoAlpha: 0}, {autoAlpha: 1, duration: .5});
    
    document.querySelector(".navBar").style.visibility="visible";
    document.querySelector("#startgameStar").style.display="none";
})


document.querySelector("#clickHud").style.display = 'none';
let hudBtn = document.getElementById('hud');
hudBtn.onclick = function() {
    let clickHudEl = document.getElementById('clickHud');
    if (clickHudEl.style.display !== 'none') {
        const tl = gsap.timeline({ defaults: { duration: .5} })
        tl.to('#clickHud', {x: '-10px', ease: "power4.out", opacity: 0 })
        clickHudEl.style.display = 'none';
    } 
    else {
        const tl = gsap.timeline({ defaults: { duration: .5} })
        tl.to('#clickHud', {x: '10px', ease: "power4.out", opacity: 1 })
        
        clickHudEl.style.display = 'block';
    }
}

let homeBtn = document.querySelector(".nav-home");
homeBtn.onclick = function() {
    player.clickExp();
    expEl.innerHTML = player._exp;
    lvlEl.innerHTML = player._lvl;
}

let portfolioBtn = document.querySelector(".neonTextTitle");
portfolioBtn.onclick = function() {
    player.clickExp();
    expEl.innerHTML = player._exp;
    lvlEl.innerHTML = player._lvl;
}
// let playerLvl = player._lvl;
// playerLvl.addEventListener("change", ()=>{
//     if (player._exp >= 100 && player._exp <= 110)
//     console.log("lvl up!");
// })
document.getElementById("codetariLiftoff").style.visibility="hidden";
let codetariBtn = document.querySelector(".neonTextProjectOne");
codetariBtn.onclick = function() {
    player.clickExp();
    
    console.log("clicked codetari");
    document.getElementById("codetariLiftoff").style.visibility="visible";
    document.querySelector(".neonTextProjectOne").style.display="none";
    expEl.innerHTML = player._exp;
    lvlEl.innerHTML = player._lvl;

}

document.getElementById("codetariList").style.visibility="hidden";
let codetariPicBtn = document.getElementById("codetariLiftoff");
codetariPicBtn.onclick = function() {
    player.clickExp();
    console.log("clicked codetariPIC");
    document.getElementById("codetariList").style.visibility="visible";
    gsap.fromTo("#codetariList", {autoAlpha: 0}, {autoAlpha: 1, duration: .5});
    expEl.innerHTML = player._exp;
    lvlEl.innerHTML = player._lvl;
}

document.getElementById("albumProject").style.visibility="hidden";
let albumProjectBtn = document.querySelector(".neonTextProjectTwo");
albumProjectBtn.onclick = function() {
    player.clickExp();
    console.log("clicked albumz");
    document.getElementById("albumProject").style.visibility="visible";
    document.querySelector(".neonTextProjectTwo").style.display="none";
}
document.getElementById("albumProjectList").style.visibility="hidden";
let albumProjectPicBtn = document.getElementById("albumProject");
albumProjectPicBtn.onclick = function() {
    player.clickExp();
    console.log("clicked albumPIC");
    document.getElementById("albumProjectList").style.visibility="visible";
    gsap.fromTo("#albumProjectList", {autoAlpha: 0}, {autoAlpha: 1, duration: .5});
    expEl.innerHTML = player._exp;
    lvlEl.innerHTML = player._lvl;
}
