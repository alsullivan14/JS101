// Input number
// Ouput negative number if the number isnt already negative

// If negative, return number
// If positive, return value of 0 - value

function negative(num) {
  if (num < 0) {
    console.log(num);
  } else if (num === 0) {
    console.log(-0);
  } else {
    console.log(0 - num);
  }
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0