// 1> print numbers 1 to 10 

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// 2> print only even number from 1 to 20

// for(let i = 1; i <=20; i++){
//     if(i%2 != 0){
//         continue;
//     }
//     console.log(i)
// }

// 3> print a number from 10 to 1

// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

// 4> print the word "yes" 5 time 

// for(let i = 1; i<=5; i++){
//     console.log("yes");
// }

// 5> print whether number from 1 to 10 are even or odd 

// for(let i = 1; i<=10; i++){
//     if(i%2 == 0){
//         console.log(`even :${i}`);
//     }
//     else{
//         console.log(`odd :${i}`);
//     }
// }

// 6> ask user for a number and say if it's positive or negative

// let i = +prompt("give me any number")
// if(i>=0){
//     alert("Positive");
// }
// else{
//     alert("negative");
// }

// 7> Ask user’s age and check if eligible to vote

// let age = +prompt("Enter your age");
// if(age>=18){
//     alert("Eligible");
// }
// else{
//     alert("Not Eligible");
// }

// 8> Print multiplication table of 5

// let table = +prompt("enter any number for table :");
// for(let i = 1; i <=10; i++){
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count = 0;
// for(let i=1;i<=15;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count);


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let userpass = "Bhupen";

// let password = prompt("Enter Password");

// if(password === null){
//     console.error("you canel it");
// }
// else if(password === ""){
//     console.error("password is blank")
// }
// else if(password === userpass){
//     alert("matchd")
// }
// else{
//     console.error("worng pasword");
// }
