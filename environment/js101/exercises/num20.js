// Input a string of number
// 
// Output an integer equivalent to string

function strToInt(string) {
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
  let arrayOfDigits = string.split("").map( el => DIGITS[el]);
  let value = 0
  arrayOfDigits.forEach(digit => (value = (value * 10) + digit));
  console.log(value);
};

strToInt("5467");