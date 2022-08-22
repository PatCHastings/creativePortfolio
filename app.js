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
            document.querySelector("#moon").style.visibility="visible";  
            document.querySelector("#crescentMoon").style.visibility="hidden";  
        })
    }
})


class Elements {
    constructor() {
        this._active == true; 
    }
}
function introBox() {
    const tl = gsap.timeline({ defaults: { duration: 2 } })
        document.querySelector(".introTextBox").style.visibility="visible";
        tl.to('.introTextBox', { duration: 2.5, ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.074,0.914 0.2,1 0.354,1.105 0.504,1 1,1 "), y: -500 });
}




