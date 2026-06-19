let select = document.querySelector("select")
let span = document.querySelector("h1")
select.addEventListener("change",function(dets){
    span.innerHTML=`Your Best Friend is ${dets.target.value}`
})