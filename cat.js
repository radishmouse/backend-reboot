const catSaysWhat = "purrrrrrr";
const kittenSaysWhat = "squeak";

const bagOfCats = {
  cat: catSaysWhat,      // In JS, quotes around keynames are optional
  kitten: kittenSaysWhat // unless you use dashes or spaces
};

// module.exports is built into Node.js
module.exports = bagOfCats;