import Elements from "./elements.js"
import Timer from "./timer.js";
import Player from "./player.js";

const player = new Player();
const fullmoonEl = document.querySelector("#moon");
const crescentMoonEl = document.getElementById("crescentMoon");
const expEl = document.querySelector('#exp');
const hpEl = document.querySelector('#hp');


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

document.querySelector("#hud").style.visibility="hidden";
document.querySelector("#startgameStar").style.visibility="hidden"; 
let starBtn = document.getElementById('startgameStar');
starBtn.addEventListener("click", ()=> {
    console.log("wtf");
    document.querySelector("#hud").style.visibility="visible";
    document.querySelector("#startgameStar").style.display="none"
})

// document.querySelector("#clickHud").style.visibility="hidden"; 


// hudBtn.addEventListener("click", ()=> {
// if (clickHudEl.style.visibility==="hidden") {
//         clickHudDisp();
//     } 
// })    
// hudBtn.addEventListener("click", ()=> {
// if (clickHudEl.style.visibility==="visible") {
//         clickHudHide();        
//     }
// })
function clickHudDisp() {
    const tl = gsap.timeline({ defaults: { duration: .75} })
    document.querySelector("#clickHud").style.visibility="visible";
    expEl.innerHTML = player._exp;
    hpEl.innerHTML = player._hp;
    tl.to('#clickHud', {x: '10px', ease: "power4.out", opacity: 1 })
}
function clickHudHide() {
    const tl = gsap.timeline({ defaults: { duration: .75} })
    
    tl.to('#clickHud', {x: '-10px', ease: "power4.out", opacity: 0 })
    document.querySelector("#clickHud").style.visibility="hidden";
}

document.querySelector("#clickHud").style.display = 'none';
let hudBtn = document.getElementById('hud');
hudBtn.onclick = function() {
    let clickHudEl = document.getElementById('clickHud');
    if (clickHudEl.style.display !== 'none') {
        const tl = gsap.timeline({ defaults: { duration: .75} })
        tl.to('#clickHud', {x: '-10px', ease: "power4.out", opacity: 0 })
        clickHudEl.style.display = 'none';
        
    } 
    else {
        
        const tl = gsap.timeline({ defaults: { duration: .75} })
        tl.to('#clickHud', {x: '10px', ease: "power4.out", opacity: 1 })
        expEl.innerHTML = player._exp;
        hpEl.innerHTML = player._hp;
        clickHudEl.style.display = 'block';
        
    }
}
