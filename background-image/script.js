const bgImage=document.getElementById("background-image")
window.addEventListener("scroll",()=>{
    bgImage.style.opacity=1-window.pageYOffset/900;
    bgImage.style.backgroundSize=160 -window.pageYOffset/12 + "%"
})
