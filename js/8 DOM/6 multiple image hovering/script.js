let sec = document.querySelectorAll(".sec")


sec.forEach(function(sec){
    sec.addEventListener("mouseenter",function(){
        sec.childNodes[3].style.opacity = 1.5
    })
    sec.addEventListener("mouseleave",function(){
        sec.childNodes[3].style.opacity = 0
    })
    sec.addEventListener("mousemove",function(dates){
        sec.childNodes[3].style.left=dates.x+"px"
    })
})