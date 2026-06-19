//A> Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

console.log("---------------Question A---------------")

let a = 10;
let b = 3;

console.log(`a + b = ${a+b}`);
console.log(`a - b = ${a-b}`);
console.log(`a * b = ${a*b}`);
console.log(`a / b = ${a/b}`);
console.log(`a % b = ${a%b}`);


//B> Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.


console.log("---------------Question B---------------")

let x = 5; 
x = x + 3;

console.log(x);

x += 3;
console.log(x);
x -= 3;
console.log(x);
x *= 3;
console.log(x);
x /= 3;
console.log(x);


//C> let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.


console.log("---------------Question C---------------")

console.log("count++");
let count = 5;
console.log(count);
count++
console.log(count);

console.log("count--");
let countm = 5;
console.log(countm);
countm--
console.log(countm);



console.log("---------------Question D---------------")

// Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.
console.log(`5 == "5"`)
console.log(5 == "5");
console.log(`5 === "5"`)
console.log(5==="5");


console.log("---------------Question E---------------")
//  Check if 10 is greater than 5, less than 20, and equal to 10

console.log("10 is greater than");
console.log(10>5);
console.log("less than 20");
console.log(10<20);
console.log("equal to 10");
console.log(10==10);

console.log("---------------Question F---------------")
// Try logical AND and OR:
// true && false
// true || false
// !(true)

console.log(true && false);
console.log(true || false);
console.log(!(true));


console.log("---------------Question G---------------")
// Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

console.log(5 > 3 && 10 > 8)
console.log(5 > 3 || 10 > 8)


console.log("---------------Question H---------------")
//  Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

console.log(5 & 1);
console.log(5 | 1);
