let post = document.querySelector("#post");
let heart = document.querySelector("i");

post.addEventListener("click", ()=>{
    heart.style.opacity=0.8;
    heart.style.transform = "translate(-50%,-50%) scale(2)";

    setTimeout(() => {
        heart.style.opacity=0;
    }, 1500);
});