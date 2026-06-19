
// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let attempts = 0;
// let password = "Bhupen";
// let userpassword = prompt("Enter your password");

// attempts++;

// while (password !== userpassword) {
//     if(attempts == 3){
//         console.error("account locked");
//         break

//     }
//     else if(userpassword === null){
//         console.error("You cancel it");
//     }
//     else if(userpassword === ""){
//         console.error("Password are blank");

//     }
//     else{
//         console.error("worng password");
//     }
//     userpassword = prompt("Enter your password");
//     attempts++;
// }
// if(password === userpassword){
//     alert("password curect");
// }


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let word = prompt("Give me any Word!!");
// let count=0;
// while(word !== "stop"){
//     console.log(word);  
//     word = prompt("Give me any Word!!");
//     if(word == "yes"){
//         count++;
//     }
// }
// console.log(count);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i=1; i<=50;i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for(let i=1; i<=30;i++){
//     if(i%2 !== 0){
//         sum = sum +i;
//     }
// }
// console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = +prompt("give it number (even)");

// while(num % 2 !== 0){
//     num = +prompt("give it number (even)");
//     console.log(num);
// }



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = prompt("enter starting number");
// let end = prompt("enter end number");
// if(start>end){
//     console.error("end number are not lessthen start number");
// }
// for(start;start<=end;start++){
//     console.log(start);
// }



// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for(let i=1; i<=20; i++){
//     if(count===3) break;
//     if(i%2!==0){
//         console.log(i);
//         count++;
//     }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let count = 0;

// for(let i=1;i<=5;i++){
//     let num= +prompt("number do");
//     if(num>=0){
//         console.log(`number are  ${num}`);
//         count++;
//     }
// }
// console.log(count);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”


let balance = 1000;
let withdrawals = 0;
let count = 0
while (balance > 0 && withdrawals !== 3) {
    withdrawal = +prompt("withdrawals amount");
    if (balance < withdrawal) console.error("gandu hasiyat me");
    else balance -= withdrawal 
    withdrawals++
    console.log(`total balance ${balance}`);
    // console.log(`withdrawal amo is ${withdrawal} and balance is ${balance}`);
}