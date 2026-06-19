let arr = [
    {
        teamname: "Chennai Super Kings",
        primary: "Yellow",
        secon: "Blue",
        fullname: "Chennai Super Kings",
        captain: "Ruturaj Gaikwad",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2024/102.png",
        logo: "https://1000logos.net/wp-content/uploads/2024/03/Chennai-Super-Kings-Logo.png",
        trophies: 5
    },
    {
        teamname: "Mumbai Indians",
        primary: "Blue",
        secon: "Gold",
        fullname: "Mumbai Indians",
        captain: "Hardik Pandya",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
        trophies: 5
    },
    {
        teamname: "Kolkata Knight Riders",
        primary: "Purple",
        secon: "Gold",
        fullname: "Kolkata Knight Riders",
        captain: "Ajinkya Rahane",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2025/44.png",
        logo: "https://1000logos.net/wp-content/uploads/2024/03/Kolkata-Knight-Riders-Logo.png",
        trophies: 3
    },
    {
        teamname: "Royal Challengers Bengaluru",
        primary: "Red",
        secon: "Black",
        fullname: "Royal Challengers Bengaluru",
        captain: "Rajat Patidar",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2024/597.png",
        logo: "https://i.pinimg.com/originals/0a/18/97/0a18975e807dee54026de6a46aedccf6.png",
        trophies: 1
    },
    {
        teamname: "Gujarat Titans",
        primary: "Navy Blue",
        secon: "Teal",
        fullname: "Gujarat Titans",
        captain: "Shubman Gill",
        captainimg:"https://www.gujarattitansipl.com/static-assets/images/players/66818.png?v=5.86",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",
        trophies: 1
    },
    {
        teamname: "Rajasthan Royals",
        primary: "Pink",
        secon: "Blue",
        fullname: "Rajasthan Royals",
        captain: "Sanju Samson",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2024/190.png",
        logo: "https://1000logos.net/wp-content/uploads/2024/03/Rajasthan-Royals-Logo-2008.png",
        trophies: 1
    },
    {
        teamname: "Sunrisers Hyderabad",
        primary: "Orange",
        secon: "Black",
        fullname: "Sunrisers Hyderabad",
        captain: "Pat Cummins",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2025/33.png",
        logo: "https://banner2.cleanpng.com/20180330/yhe/aviiv4l3i.webp",
        trophies: 1
    },
    {
        teamname: "Punjab Kings",
        primary: "Red",
        secon: "Silver",
        fullname: "Punjab Kings",
        captain: "Shreyas Iyer",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2025/12.png",
        logo: "https://brandlogovector.com/wp-content/uploads/2021/11/Punjab-Kings-Logo-Small.png",
        trophies: 0
    },
    {
        teamname: "Delhi Capitals",
        primary: "Blue",
        secon: "Red",
        fullname: "Delhi Capitals",
        captain: "Axar Patel",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2025/110.png",
        logo: "https://crushlogo.com/files/preview/800x800/11683722949k5ivyrfwmfjctvgtnec9uligtlfcfmgobw0mkgqahysbuuklnahyygoatzlmlnjwhq7cpi6beyqe3qe30jy1osvr9wopzqowpfqj.png",
        trophies: 0
    },
    {
        teamname: "Lucknow Super Giants",
        primary: "Navy Blue",
        secon: "Yellow",
        fullname: "Lucknow Super Giants",
        captain: "Rishabh Pant",
        captainimg:"https://documents.iplt20.com/ipl/IPLHeadshot2025/18.png",
        logo: "https://brandlogos.net/wp-content/uploads/2025/03/lucknow_super_giants-logo_brandlogos.net_zr1yq.png",
        trophies: 0
    }
]

let main = document.querySelector(".main");
let logo = document.querySelector(".logo img");
let teamname = document.querySelector(".logo h1");
let trophies = document.querySelector(".trophies");
let captain = document.querySelector(".captain img");
let captainname = document.querySelector(".captain h1");
let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let a = Math.floor(Math.random()*arr.length)
    let b = arr[a].primary

    main.style.backgroundImage =`radial-gradient(${arr[a].primary},${arr[a].secon} )`;
    trophies.style.color="black"
    logo.src=`${arr[a].logo}`;
    teamname.innerHTML=`${arr[a].teamname}`
    trophies.innerHTML=`${arr[a].trophies}`
    captain.src=`${arr[a].captainimg}`  
    captainname.innerHTML=`${arr[a].captain}`
})
