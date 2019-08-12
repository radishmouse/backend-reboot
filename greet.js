// howFn should be a function that
// returns a string.
function sayHello(howFn) {
    console.log(`${howFn()}! I am sooo happy to meet you`);
}

module.exports = sayHello; // Assign the sayHello function as the export