const users = [
    {
        pic: "https://i.pinimg.com/736x/71/0b/f8/710bf838550251c8cfa46cb4cf010d66.jpg",
        name: "Blood Lord Azrael",
        age: 127,
        bio: "Cold strategist and ruler of the Night Empire. Believes mercy is a weakness."
    },
    {
        pic: "https://i.pinimg.com/736x/6e/79/72/6e79723407797d53465abcf8f4e85a4e.jpg",
        name: "Dark Emperor Morvane",
        age: 342,
        bio: "An ancient tyrant who conquers through silence, fear, and absolute control."
    },
    {
        pic: "https://i.pinimg.com/736x/ab/12/2c/ab122c5d844e923a671459212e199c9b.jpg",
        name: "Crimson Rex",
        age: 89,
        bio: "A brutal battlefield vampire who prefers raw power over manipulation."
    },
    {
        pic: "https://i.pinimg.com/736x/b5/64/54/b56454a86cc2e22bc96db88c3165c236.jpg",
        name: "Noctis Blackveil",
        age: 211,
        bio: "Master of shadows who controls empires from behind the scenes."
    },
    {
        pic: "https://i.pinimg.com/736x/47/db/2d/47db2d44d90b3c6a9876f1b3f98f2def.jpg",
        name: "Obsidian King Lucien",
        age: 165,
        bio: "Charismatic and ruthless ruler who wins wars before they even start."
    }
];

let main = document.querySelector(".main")
let sum = ''
users.forEach(function (val) {
     sum = sum + (`
        <div class="card">
        <img src="${val.pic}" alt="">
        <h1>${val.name}</h1>
        <h3>${val.age}</h3>
        <p>${val.bio}</p>
        </div>
        `)
        
    })
    console.log(sum)
    main.innerHTML = sum