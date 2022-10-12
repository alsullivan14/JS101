/* 
Process: input-take user name w readling
Data Structure: one string as input, return string as output
Algorithm: using if statement check whether response contains exclamation and return different response.
*/


let rl = require('readline-sync');

let name = rl.question("What is your name? ").trim();

if (name.search("!")) {
    console.log(`WHY ARE WE SCREAMING ${name.slice(0, -1).toUpperCase()}?`);
} else {
    console.log(`Hello ${name}.`);
}