const rl = require('readline-sync');

console.log("Please enter the length of the room in meters: ")
let length = rl.prompt();
length = parseInt(length, 10);

console.log("Please enter the width of the room in meters: ")
let width = rl.prompt();
width = parseInt(width, 10);


console.log(`The area of the room is ${length * width} square meters`);
console.log(`The area of the room is ${((length * width) * 10.7639)} square feet`);


