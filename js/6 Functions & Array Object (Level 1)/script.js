// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function syhello(){
//     console.log("hello javascript");
// }
// syhello();


// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function greated(name="Guest"){
//     console.log(`Hello ${name}, Wellcom to Javascript`)
// }
// greated();

// 4. Use rest parameters to make a function that adds unlimited numbers.

// function arrr(...arr){
//     console.log(arr);
// }
// arrr(1,8,5,5,3,8,6,7,8,4,7,6,8,2,8,2);

// 5. Create an IIFE that prints `"I run instantly!"`.

// (function (){
//     console.log("I run instantly!");
// })()

// 6. Make a nested function where the inner one prints a variable from the outer one.

// function fun1(){
//     let variable1 = 50;
//     function fun2(){
//         console.log(`${variable1}`);
//     }
//     fun2();
// }
// fun1();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruits = ["apple","pinaple","mango","banana","orange"]
// fruits.push("ganna")
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// 8. Use a `for` loop to print all elements of an array.

// let fruits = ["apple","pinaple","mango","banana","orange"]

// for(let i = 0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let person = {
//     name:"savan",
//     age:22,
//     city:"vyara"
// }

// for(let val in person){
//     console.log(`${val} : ${person[val]}`)
// }

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

// setTimeout(function(){
//     console.log("tera time khatam")
// },2000)