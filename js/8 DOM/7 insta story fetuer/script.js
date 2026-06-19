let arr = [{
    dp: "./1.jpeg",
    story: "./2.jpeg"
},
{
    dp: "./3.jpeg",
    story: "./4.jpeg"
},
{
    dp: "./5.jpeg",
    story: "./6.jpeg"
},
{
    dp: "./7.jpeg",
    story: "./8.jpeg"
},
]

let col = ""
arr.forEach(function(val,inx){
    col += `<div class="story">
                <img id="${inx}" src="${val.dp}" alt="">
            </div>` 
})

let storys = document.querySelector(".storys");
let full = document.querySelector(".full")
storys.innerHTML=col;


storys.addEventListener("click",function(val){
    full.style.display="block";
    full.style.backgroundImage = `url(${arr[val.target.id].story})`
    setTimeout(function(){
        full.style.display="none"
    },3000)
})  