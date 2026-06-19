let btn = document.querySelector(".btn")
let fileinput = document.querySelector(".fileinput")

btn.addEventListener("click",function(){
    fileinput.click();
})
fileinput.addEventListener("change",function(deta){
    let name = deta.target?.files[0]?.name
    if(name){
        btn.innerHTML = `${name}`
    }else{
        btn.innerHTML = "Upload File"
    }
})