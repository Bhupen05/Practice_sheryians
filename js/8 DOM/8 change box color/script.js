let box = document.querySelector(".box")
let btn = document.querySelector("#btn")

btn.addEventListener("click",function(){
    let r= Math.floor(Math.random()*255)
    let g= Math.floor(Math.random()*255)
    let b= Math.floor(Math.random()*255)
    box.style.backgroundColor=`rgb(${r},${g},${b})`
})