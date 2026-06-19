let main = document.querySelector(".main")
let cur = document.querySelector(".cur")

main.addEventListener("mousemove",function(date){
    cur.style.left = date.x+"px"
    cur.style.top = date.y+"px"
})