// Input a string of number
// Determine if sign precedes numeric characters
// Create if else blocks to catch three different cases
// Output an integer equivalent to string with sign


function signedNumber(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  if (string[0] === "-") {
    let arrayOfDigits = string.slice(1).split("").map( el => DIGITS[el]);
    let value = 0
    arrayOfDigits.forEach(digit => (value = (value * 10) + digit));
    console.log(-(value));
  } else if (string[0] === "+") {
    let arrayOfDigits = string.slice(1).split("").map( el => DIGITS[el]);
    let value = 0
    arrayOfDigits.forEach(digit => (value = (value * 10) + digit));
    console.log(value);
  } else {
    let arrayOfDigits = string.split("").map( el => DIGITS[el]);
    let value = 0
    arrayOfDigits.forEach(digit => (value = (value * 10) + digit));
    console.log(value);
  }
};


signedNumber("+14");
signedNumber("-2001");
signedNumber("543");