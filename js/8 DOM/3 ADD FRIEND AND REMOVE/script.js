let btn = document.querySelector(".but")
let check = 0 

btn.addEventListener("click",function(){
    if(check === 0){
        btn.innerHTML="Unfollow"
        btn.style.color="greay"
        btn.style.bg
        check = 1
    }else{
        btn.innerHTML="Follow"
        check = 0
    }
})