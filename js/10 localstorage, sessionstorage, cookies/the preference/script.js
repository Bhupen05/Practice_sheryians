let win = window.matchMedia('(prefers-color-scheme: dark)')
let btn = document.querySelector("#togglrTheme")

function settheme() {
    if (win.matches) {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    } else {
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}

console.log(win)
settheme();
btn.addEventListener("click",function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }else{
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }
})