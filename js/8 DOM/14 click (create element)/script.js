let btn = document.querySelector(".btn")
let main = document.querySelector(".main")
let arr = [
    "Savan is gay !!",
    "Savan is a mistery",
    "Savan is a namard",
    "jay also",
    "what you think???"
]

btn.addEventListener("click",function(){
    let h1 = document.createElement("h1")
    let num = Math.floor(Math.random()*arr.length)
    let x = Math.random()*100
    let y = Math.random()*100
    let z = Math.random()*360
    h1.innerHTML=arr[num]
    h1.style.position="absolute"
    h1.style.top=x+"%"
    h1.style.left=y+"%"
    h1.style.rotate=z+"deg"
    h1.style.textWrap="nowrap"
    main.append(h1)
})