// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

let age = prompt("enter your age")
if(age>=18){
    alert("you can enter")
}
else{
    alert("nahi ho paiga")
}

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let marks = prompt("enter your mark");
if(marks >= 90){
    alert("A grade");
}
else if(marks >= 75){
    alert("B grade");
}
else if(marks >= 50){
    alert("c grade");
}
else{
    alert("Fail gandu kai vach");
}

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "Bhopal";
if(city == "Bhopal"){
        console.log("MP");
        alert("MP");
}
else if(city == "Delhi"){
    console.log("Capital");
    alert("Capital");
}
else{
    console.log("Unknown City");
    alert("Unknown City");
}

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 40;

score >35 ? alert("pass"):alert("fail");



// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temperatuer = prompt("enter Temperatuer");
temperatuer > 30 ? alert("Hot"):alert("Cool");




// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let day = +prompt("enter day between 1-7");
switch(day){
    case 1 :
        alert("MonDay");
        break;
    case 2 :
        alert("TuesDay");
        break;
    case 3:
        alert("WednesDay");
        break;
    case 4:
        alert("ThursDay");
        break;
    case 5:
        alert("FriDay");
        break;
    case 6:
        alert("SaturDay");
        break;
    case 7:
        alert("SunDay");
        break;
    default:
        alert("Invalid Day");
        break;
    }



// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age2 = +prompt("enter your age");

let country = prompt("enter your country");

if(age2 >= 18 && country == "India"){
    alert("Eligible for vote")
}
else{
    alert("Not Eligible");
}