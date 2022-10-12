let rl = require('readline-sync');

let bill = rl.question("What is the bill total? ");
bill = parseInt(bill, 10);

let tip = rl.question("What percentage tip would you like to leave? ");
tip = parseInt(tip, 10);

console.log(`Your tip is $${(bill * (tip / 100))}`);
console.log(`Your total is $${bill + (bill * (tip / 100))} including a tip`);