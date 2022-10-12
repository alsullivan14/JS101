// Input an age from the user, and an age at which to retire
// Output a message showing the current year, the year the person will retire and how many more years are left until retirement.

let rl = require("readline-sync");

console.log("What is your age?");
let age = parseInt(rl.prompt(), 10);
//console.log(typeof age);

console.log("At what age will you retire?");
let targetRetirement = parseInt(rl.prompt(), 10);

let date = new Date().getFullYear();

console.log(`The current year is ${date}. You will retire in the year ${date + (targetRetirement - age)}\n You have ${targetRetirement - age} more years to go!`);