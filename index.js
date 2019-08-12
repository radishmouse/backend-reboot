/*
1. Create another animal module, based off of dog.js
2. require() it into index.js
3. Call greet() using your new animal module function.
*/
// Callback examples 
const hoo = require("./owl");
const bark = require("./dog");
const greet = require("./greet");
// greet(bark, "Tony");
// greet(hoo, "Jonathan");

function helloWorld() {
    console.log("3. hello world");
}

// setTimeout and setInterval are Ticketmaster.
// setTimeout - you pass it a function, it waits, then it calls it
// setInterval - you pass it a function, it waits, calls it, waits, calls it
console.log("1. about to call setTimeout");
// setInterval(helloWorld, 1000);
// setInterval(function () {
//     console.log("3. hello world");
// }, 1000);
setInterval(() => {
    console.log("3. hello world");
}, 1000);
console.log("2. you called setTimeout");

// helloWorld();


// const woof = bark();
// greet(woof);



// =======================================
// Module examples

// 0. Grab specific sound using .<keyname>
// const catSound = require("./cat");
// console.log(catSound.cat);

// 1a. Grab specific sound *before* the assignment
// const catSound = require("./cat").cat;
// console.log(catSound);

// 1b. Grab specific sound *before* the assignment
// const catSound = require("./cat").cat;
// console.log(require("./cat").cat);
// console.log(require("./cat").cat); // Start with "./cat" - do we sub?
// console.log({
//     cat: catSaysWhat,      // In JS, quotes around keynames are optional
//     kitten: kittenSaysWhat // unless you use dashes or spaces
//   }.cat); // Do we sub for require("./cat")
// console.log("purrrrrrr"); // Eventually arrives at simplest version.



// 2. "Destructuring" - "pluck a specific value out of an object"
// const {cat, kitten} = require("./cat");
// console.log(cat);
// console.log(kitten);
// When would I destructure?
// When you want one to three individual values.
// If you want a lot more, just bring in the whole object.