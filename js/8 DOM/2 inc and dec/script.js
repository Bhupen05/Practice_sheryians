let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let num = document.querySelector("#num");
let reset = document.querySelector("#reset");
let a = 0;

inc.addEventListener("click",function(){
    a++
    num.innerHTML=a
})

dec.addEventListener("click",function(){
    a--
    num.innerHTML=a
})
reset.addEventListener("click",function(){
    a=0
    num.innerHTML=a
})