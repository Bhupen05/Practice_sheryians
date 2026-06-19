let pro = document.querySelector(".progrece")
let prog = document.querySelector(".prog");
let btn = document.querySelector(".dowload");
let h1 = document.querySelector("h1");
let gro=0
btn.addEventListener("click",function(){
    btn.style.pointerEvents="none"
    pro.style.display="block"
    let chul = 30 + Math.floor(Math.random()*50);
    let set = setInterval(()=>{
        gro++
        prog.style.width=gro+"%";
        btn.style.cursor="no-drop"
        btn.style.opacity=0.5
        h1.innerHTML=gro+"%"
    },chul)
    
    setTimeout(()=>{
        clearInterval(set);
    },chul*100)
    console.log(chul)
})