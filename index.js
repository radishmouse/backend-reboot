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
const {cat, kitten} = require("./cat");
console.log(cat);
console.log(kitten);
// When would I destructure?
// When you want one to three individual values.
// If you want a lot more, just bring in the whole object.