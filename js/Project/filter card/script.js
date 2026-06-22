let user = [
    {
        pic: "https://i.pinimg.com/1200x/71/0b/f8/710bf838550251c8cfa46cb4cf010d66.jpg",
        name: "Blood Lord Azrael",
        age: 127,
        bio: "Supreme ruler of the Night Empire. Cold strategist, feared more than loved. Believes mercy is weakness."
    },
    {
        pic: "https://i.pinimg.com/736x/6e/79/72/6e79723407797d53465abcf8f4e85a4e.jpg",
        name: "Dark Emperor Morvane",
        age: 342,
        bio: "An ancient tyrant who crushed kingdoms without raising his voice. Power, silence, domination."
    },
    {
        pic: "https://i.pinimg.com/736x/ab/12/2c/ab122c5d844e923a671459212e199c9b.jpg",
        name: "Crimson Rex",
        age: 89,
        bio: "A battlefield vampire known for brutal efficiency. Prefers direct confrontation over manipulation."
    },
    {
        pic: "https://i.pinimg.com/736x/b5/64/54/b56454a86cc2e22bc96db88c3165c236.jpg",
        name: "Noctis Blackveil",
        age: 211,
        bio: "Master of shadows and espionage. Controls empires from behind curtains, never from the throne."
    },
    {
        pic: "https://i.pinimg.com/736x/47/db/2d/47db2d44d90b3c6a9876f1b3f98f2def.jpg",
        name: "Blood Sovereign Kael",
        age: 156,
        bio: "Rules through fear and loyalty. Known for executing traitors personally."
    },
    {
        pic: "https://i.pinimg.com/1200x/82/9a/64/829a64fc54882907e92b9155a8a3d022.jpg  ",
        name: "Void Prince Draven",
        age: 74,
        bio: "A silent predator who strikes only when victory is guaranteed. No wasted moves."
    },
    {
        pic: "https://i.pinimg.com/736x/18/2c/a7/182ca7db8d9c4f2d290ca14df633ffbd.jpg",
        name: "Nightlord Vektor",
        age: 198,
        bio: "Former war general turned immortal ruler. Discipline and order above all."
    },
    {
        pic: "https://i.pinimg.com/1200x/42/58/51/425851e3f729a1ed42853302e1551d99.jpg",
        name: "Blood Reaper Xeroth",
        age: 301,
        bio: "An executioner of fallen empires. Appears only when annihilation is inevitable."
    },
    {
        pic: "https://i.pinimg.com/736x/97/5a/2a/975a2a793f22fd7a8fee1760a16205d0.jpg",
        name: "Obsidian King Lucien",
        age: 165,
        bio: "Charismatic, ruthless, and intelligent. Wins wars before they begin."
    },
    {
        pic: "https://i.pinimg.com/1200x/2e/9c/6a/2e9c6a43821a317346963ab65aa00a47.jpg",
        name: "Dread Emperor Valcor",
        age: 420,
        bio: "A myth turned ruler. Entire regions surrender at the mention of his name."
    }
]
let inp = document.querySelector("input")

let pic = document.querySelector(".pic img")
let name = document.querySelector("h1")
let age = document.querySelector("h2")
let bio = document.querySelector("p")

function showuser(val){

    val.forEach(function(arr){
       
    
    const container = document.getElementById("container");
    
    // main wrapper (optional but recommended)
    const card = document.createElement("div");
    card.className = "card";
    
    // pic div
    const picDiv = document.createElement("div");
    picDiv.className = "pic";
    
    const img = document.createElement("img");
    img.src = `${arr.pic}`;
    
    img.alt = `${arr.pic}`;    
    
    picDiv.appendChild(img);
    
    // name
    const h1 = document.createElement("h1");
    h1.textContent = arr.name;
    
    // age
    const h2 = document.createElement("h2");
    h2.textContent = arr.age;
    
    // bio
    const p = document.createElement("p");
    p.textContent = arr.bio;
    
    // append everything
    card.append(picDiv, h1, h2, p);
    container.appendChild(card);
    
    })
}
showuser(user);
let not = document.querySelector(".not")
inp.addEventListener("input", function () {
    let value = inp.value.toLowerCase();

    let newuser = user.filter((use) =>
        use.name.toLowerCase().startsWith(value)
    );

    document.querySelector("#container").innerHTML = "";

    if (newuser.length === 0) {
        not.style.display = "block";
        document.querySelector(".box").style.display="none"
    } else {
        not.style.display = "none";
        showuser(newuser);
    }
});
