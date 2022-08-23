import Elements from "./elements.js"

const fullmoonEl = document.querySelector("#moon");
const crescentMoonEl = document.getElementById("crescentMoon");



let moonButton = document.getElementById('moon'); 
moonButton.addEventListener("click", ()=> {
    console.log("hello");
    document.querySelector("#moon").style.visibility="hidden";  
    document.querySelector("#crescentMoon").style.visibility="visible";  
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




