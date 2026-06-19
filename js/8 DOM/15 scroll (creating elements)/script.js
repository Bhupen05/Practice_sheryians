let btn = document.querySelector(".btn")
let main = document.querySelector(".main")
let box = document.querySelector(".box")
let arr = [
    "Savan is gay !!",
    "Savan is a mistery",
    "Savan is a namard",
    "jay also",
    "what you think???"
]

// btn.addEventListener("click",function(){
    // })
    
    window.addEventListener("scroll",function(val){
        let h1 = document.createElement("h1")
        let num = Math.floor(Math.random()*arr.length)
        let x = Math.random()*100
        let y = Math.random()*100
        let z = Math.random()*360
        let c1 = Math.floor(Math.random()*255)
        let c2 = Math.floor(Math.random()*255)
        let c3 = Math.floor(Math.random()*255)
        h1.innerHTML=arr[num]
        h1.style.position="absolute"
        h1.style.top=x+"%"
        h1.style.left=y+"%"
        h1.style.rotate=z+"deg"
        h1.style.color=`rgb(${c1},${c2},${c3})`
        h1.style.textWrap="nowrap"
        box.append(h1)
    console.log(val)
})