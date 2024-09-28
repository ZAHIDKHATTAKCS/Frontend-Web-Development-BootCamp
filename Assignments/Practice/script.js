let heart = document.querySelector("#heart-icon");
let img = document.querySelector("#main-img");

img.addEventListener("click", ()=>{
    heart.style.opacity=0.6;
    heart.style.transform = "translate(-50%,-50%) scale(2)";

    setTimeout(() => {
        heart.style.opacity=0;
    }, 1500);
});