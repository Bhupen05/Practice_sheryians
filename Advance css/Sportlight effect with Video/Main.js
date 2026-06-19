let main = document.querySelector(".main")

main.addEventListener("mousemove",function(e){
    console.log(e)
    document.body.style.setProperty("--x",e.x+'px')
    document.body.style.setProperty("--y",e.y+'px')  
})