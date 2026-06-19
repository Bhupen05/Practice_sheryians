let card = document.querySelector(".card")
let i = document.querySelector("i")

card.addEventListener("click",function(){
    i.style.transform="scale(4) translate(-50%,-50%) rotate(360deg)" 
    setTimeout(function(){
        i.style.transform="scale(2) translate(-50%,-5000%) rotate(50deg)"
    },1000)
})
