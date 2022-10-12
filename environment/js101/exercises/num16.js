let rl = require("readline-sync");


console.log("Please enter a number: ");
let firstNumber = rl.prompt()
console.log("Please enter another number: ");
let secondNumber = rl.prompt();

function multiOperational(a, b) {
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
  console.log(num1 % num2);
  console.log(num1 ** num2);

}

multiOperational(firstNumber, secondNumber);