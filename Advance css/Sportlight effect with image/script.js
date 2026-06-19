let main =document.querySelector(".main")

main.addEventListener("mousemove",function(e){
    document.body.style.setProperty("--x",e.x+'px')
    document.body.style.setProperty("--y",e.y+'px')
})