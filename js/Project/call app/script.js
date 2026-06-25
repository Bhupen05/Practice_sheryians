const userCardData = [
  {
    id: "user_001",
    name: "Savan Chauhan",
    profileImage: "https://pinimg.com",
    details: {
      homeTown: "Bardoli",
      purpose: "Addmition",
    },
    actions: {
      phone: "+1234567890", // Placeholder for actual functionality
      messageUrl: "#",
    },
  },
  {
    id: "user_001",
    name: "Savan Chauhan",
    profileImage: "https://pinimg.com",
    details: {
      homeTown: "Bardoli",
      purpose: "Addmition",
    },
    actions: {
      phone: "+1234567890", // Placeholder for actual functionality
      messageUrl: "#",
    },
  },
  {
    id: "user_001",
    name: "Savan Chauhan",
    profileImage: "https://pinimg.com",
    details: {
      homeTown: "Bardoli",
      purpose: "Addmition",
    },
    actions: {
      phone: "+1234567890", // Placeholder for actual functionality
      messageUrl: "#",
    },
  },
];

const details = JSON.parse(localStorage.getItem("tasks")) || [];

function getdetails(data) {
  // 1. Get the item, OR fall back to an empty array string "[]" if it doesn't exist
  let oldtasks = localStorage.getItem("tasks") || "[]";
  
  // 2. Parse the string into a valid JavaScript array
  oldtasks = JSON.parse(oldtasks);
  
  // 3. Now .push will always work safely because oldtasks is guaranteed to be an array
  oldtasks.push(data);
  
  // 4. Save the updated array back to storage
  localStorage.setItem("tasks", JSON.stringify(oldtasks));
}


// function getdetails(data) {
//   if (localStorage.getItem === null) {
//     let oldtasks = [];
//     oldtasks.push(data);
//     localStorage.setItem("tasks", JSON.stringify(oldtasks));
//   } else {
//     let oldtasks = [];
//     oldtasks = localStorage.getItem("tasks");
//     oldtasks = JSON.parse(oldtasks);
//     oldtasks.push(data);
//     localStorage.setItem("tasks", JSON.stringify(oldtasks));
//   }
// }

const add = document.querySelector(".add");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const addcards = document.querySelector(".cardsdetails");
const close = document.querySelector(".close");
const stack = document.querySelector(".stack")

// Text Inputs

// // Radio Buttons (Returns a collection of all 4 radio options)
// const categoryRadios  = document.querySelectorAll('form input[name="Category"]');

// // Checked Radio Button (Returns the single radio option the user clicked)
// const selectedCategory = document.querySelector('form input[name="Category"]:checked');

add.addEventListener("click", function () {
  addcards.style.display = "block";
});

close.addEventListener("click", function () {
  addcards.style.display = "none";
});

up.addEventListener("click",function(){
  let lastChild = stack.lastElementChild
  if(lastChild){  
    stack.insertBefore(lastChild, stack.firstElementChild)
  }
})
down.addEventListener("click",function(){
   let firstChild = stack.firstElementChild
  if(firstChild){  
    stack.insertBefore(firstChild, stack.lastElementChild)
  }
})



function Showcards(val){
  val.forEach(function(usr){

    // Create the main card container
        const card = document.createElement("div");
        card.classList.add("cards");

        // Create the image wrapper and image element
        const picDiv = document.createElement("div");
        picDiv.classList.add("pic");

        const img = document.createElement("img");
        img.src =`${usr.profile}`;
        img.alt = `${usr.profile}`;

        picDiv.appendChild(img);
        card.appendChild(picDiv);

        // Create the main heading
        const nameHeading = document.createElement("h1");
        nameHeading.textContent = `${usr.name}`;
        card.appendChild(nameHeading);

        // Create the info container
        const bottomDiv = document.createElement("div");
        bottomDiv.classList.add("bottom");

        // Create the left column
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("left");

        const homeTownLabel = document.createElement("h3");
        homeTownLabel.textContent = "Home Town";

        const purposeLabel = document.createElement("h3");
        purposeLabel.textContent = "Purpose";

        leftDiv.appendChild(homeTownLabel);
        leftDiv.appendChild(purposeLabel);

        // Create the right column
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("right");

        const homeTownValue = document.createElement("h3");
        homeTownValue.textContent = `${usr.hame}`;

        const purposeValue = document.createElement("h3");
        purposeValue.textContent = `${usr.purpose}`; // Spelled exactly as provided

        rightDiv.appendChild(homeTownValue);
        rightDiv.appendChild(purposeValue);

        // Assemble the info container
        bottomDiv.appendChild(leftDiv);
        bottomDiv.appendChild(rightDiv);
        card.appendChild(bottomDiv);

        // Create the action button section
        const callDiv = document.createElement("div");
        callDiv.classList.add("call");

        const callBtn = document.createElement("h3");
        const icon = document.createElement("i");
        icon.classList.add("ri-phone-line");
        callBtn.appendChild(icon);
        callBtn.append(" Call");

        const messageBtn = document.createElement("h3");
        messageBtn.textContent = "Massge"; // Spelled exactly as provided

        callDiv.appendChild(callBtn);
        callDiv.appendChild(messageBtn);
        card.appendChild(callDiv);

        // Append the final card component to the body (or your specific container)
        document.querySelector(".stack").appendChild(card);
        // document.body.appendChild(card);

      });
    }

Showcards(details)

addcards.addEventListener("submit", function (event) {
  event.preventDefault();
  const profilePicInput = document.querySelector("#url");
  const fullNameInput = document.querySelector("#fullname");
  const homeTownInput = document.querySelector("#city");
  const purposeInput = document.querySelector("#Purpose");

  let profile = profilePicInput.value.trim();
  let name = fullNameInput.value.trim();
  let hame = homeTownInput.value.trim();
  let purpose = purposeInput.value.trim();

  if (!profile) {
    alert("Please enter your profilepic URL.");
    profilePicInput.focus();
    return;
  }

  if (!name) {
    alert("Please enter your Full Name.");
    fullNameInput.focus();
    return;
  }

  if (!hame) {
    alert("Please enter your Home.");
    homeTownInput.focus();
    return;
  }

  if (!purpose) {
    alert("Please enter your Purpose  .");
    purposeInput.focus();
    return;
  }
  addcards.reset(); 

  getdetails({
    profile,name,hame,purpose
  })

});
