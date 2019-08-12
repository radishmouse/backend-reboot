// howFn should be a function that
// returns a string.
function sayHello(howFn, toWhom) {
    const salutation = howFn(toWhom);
    console.log(`${salutation}! I am sooo happy to meet you`);
}

module.exports = sayHello; // Assign the sayHello function as the export