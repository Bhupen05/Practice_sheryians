// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);
// var a = 10

console.log(a);
var a = 10;

// b. Predict output of:
// console.log(b);
// let b = 10

console.log(b);
let b = 10;

// c. Predict output of:
// test()
// function test() { console.log(“Hello”) }

test()
function test(){
    console.log("Hello");
}

// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.

hello()
var hello = function(){
    console.log("hi");
}

// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?

console.log(" What gets hoisted?");
console.log("a, c ");

console.log("What does not get hoisted fully?");
console.log("b and d");