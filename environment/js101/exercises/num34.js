// No input
// Generate random number
// Plug number into string
// Output a string stating teddy's age with a random number between 20 and 120

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}

function teddysAge() {
  console.log(`Teddy is ${randomNumber(20, 120)} years old!`);
}


teddysAge();