let h1 = document.querySelector("h1")
let arr = [
   "./1.mp3",
    "./2.mp3",
    "./3.mp3",
    "./4.mp3",
    "./5.mp3",
    "./6.mp3",
    "./7.mp3",
     "./8.mp3",
    "./9.mp3",
    "./10.mp3",
    "./11.mp3",
    "./12.mp3",
    "./13.mp3",
    "./14.mp3",
    "./15.mp3"
]

let aud1 = new Audio(arr[0]);
let aud2 = new Audio(arr[2]);
let aud3 = new Audio(arr[3]);
let aud4 = new Audio(arr[4]);
let aud5 = new Audio(arr[5]);
let aud6 = new Audio(arr[6]);
let aud7 = new Audio(arr[7]);
let aud8 = new Audio(arr[8]);
let aud9 = new Audio(arr[9]);
let aud10 = new Audio(arr[10]);
let aud11 = new Audio(arr[11]);
let aud12 = new Audio(arr[12]);
let aud13 = new Audio(arr[13]);
let aud14 = new Audio(arr[14]);
let aud15 = new Audio(arr[15]);

helo()
window.addEventListener("keydown", function (val) {
    h1.innerHTML = val.key
    // if(val.key == keyd){
    //     arr[0].play
    // }
    // console.log(val.code)    

    if (val.code == "Keyz") {
        aud1.play();
    }
    if (val.code == "KeyX") {
        aud2.play();
    }
    if (val.code == "KeyC") {
        aud3.play();
    }
    if (val.code == "KeyV") {
        aud4.play();
    }
    if (val.code == "KeyB") {
        aud5.play();
    }
    if (val.code == "KeyN") {
        aud6.play();
    }
    if (val.code == "KeyM") {
        aud7.play();
    }
    if (val.code == "Key,") {
        aud8.play();
    }
    if (val.code == "KeyS") {
        aud9.play();
    }
    if (val.code == "KeyG") {
        aud10.play();
    }
    if (val.code == "KeyF") {
        aud11.play();
    }
    if (val.code == "KeyH") {
        aud12.play();
    }
    if (val.code == "KeyJ") {
        aud13.play();
    }
    if (val.code == "KeyK") {
        aud14.play();
    }
    if (val.code == "KeyL") {
        aud15.play();
    }
    if (val.code == "KeyA") {
        aud1.play();
    }
})

