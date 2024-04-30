
const fs = require('fs');

// initialise an empty array for the results
let result = [];

// loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // if the current number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        // add "BIGBANG" to result 
        result.push("BIGBANG");
    } 
    // if the current number is divisible by 3
    else if (i % 3 === 0) {
        // add "BIG" to result
        result.push("BIG");
    } 
    // if the current number is divisible by 5
    else if (i % 5 === 0) {
        // add "BANG" to result 
        result.push("BANG");
    } 
    // if the current number is not divisible by either 3 or 5
    else {
        // add the current number (str) to result
        result.push(i.toString());
    }
}

// write the result array to 'output.json' 
fs.writeFileSync('output.json', JSON.stringify(result));