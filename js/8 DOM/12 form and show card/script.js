let form = document.querySelector(".box")
let inp = document.querySelectorAll("input")
let pic = document.querySelector(".profile-pic img")
let name = document.querySelector(".name")
let age = document.querySelector(".age")
let profession = document.querySelector(".profession")

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let val = dets.target
    console.log(val[0].value)

    pic.src=`${val[0].value}`;
    name.innerHTML=`${val[1].value}`;
    age.innerHTML=`${val[2].value}`
    profession.innerHTML=`${val[3].value}`
})