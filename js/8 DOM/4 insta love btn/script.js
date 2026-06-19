let container = document.querySelector(".container")
let i = document.querySelector(".ri-heart-3-fill")

container.addEventListener("dblclick",function(){
    i.style.transform="translate(-50%,-50%) scale(3)"
    setTimeout(function(){
    i.style.transform="translate(-50%,-50%) scale(0)"    
    },1000)
})