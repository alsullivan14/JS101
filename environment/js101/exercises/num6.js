let rl = require("readline-sync");

function sumOrProduct() {
    console.log("Please enter an integer greater than 0: ");
    let integer = rl.prompt();
    integer = parseInt(integer, 10);
    
    console.log("Please enter 's' if you would like to compute sum, enter 'p' if you would like to compute the product: ");
    let response = rl.prompt();
    
    if (response === "s") {
        let sum = 0;
        for (let i = 1; i <= integer; i++) {
          sum += i;
        }
        console.log(`The sum is ${sum}.`);    
    } else if (response === "p") {
        let product = 1;
        for (let i = 1; i <= integer; i++) {
          product *= i;
        }
        console.log(`The product is ${product}.`)    
    } else {
        console.log("Unknown operator. Try again.");
    }
};

sumOrProduct();