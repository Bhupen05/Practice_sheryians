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
win.addEventListener("change",function(){
    settheme();
})
btn.addEventListener("click",function(){
    
})