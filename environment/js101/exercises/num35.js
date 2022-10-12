// Input ask the user for six numbers
// Output whether the sixth number appears in the first five

let rl = require("readline-sync");

console.log("Please enter a number: ");
let first = rl.prompt();

console.log("Please enter a second number: ");
let second = rl.prompt();

console.log("Please enter a third number: ");
let third = rl.prompt();

console.log("Please enter a fourth number: ");
let fourth = rl.prompt();

console.log("Please enter a fifth number: ");
let fifth = rl.prompt();

console.log("Please enter a sixth number: ");
let sixth = rl.prompt();


function seenBefore() {
  let numList = [first, second, third, fourth, fifth];
  numList.includes(sixth) ? console.log(`The number ${sixth} appears in the first five numbers.`) : console.log(`The number ${sixth} does not appear in the first five numbers`);
}

seenBefore();