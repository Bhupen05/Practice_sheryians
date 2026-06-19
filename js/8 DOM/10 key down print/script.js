
let txt = document.querySelector("h1")

window.addEventListener("keydown",function(val){
    console.log(val.key);
    if(val.key == " "){
        txt.innerHTML="Space"    
    }else{

        txt.innerHTML=`${val.key}`
    }
})