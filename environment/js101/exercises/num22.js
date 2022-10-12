// Input an integer
// Create an array of integers from input by trying to divide by ten while number is greater than 0
// How do I handle not knowing number of places in the integer??
// Use object with string digits as keys, values as integers
// Use map to extract keys from original list of integer values??
// Output a string of numeric characters equivalent to number


function numToString(int) {
  let arrOfInts = [];
  let value = int;
  while (value > 0) {
    arrOfInts.push(value % 10);
    value = Math.floor(value / 10);
  }
  let result = arrOfInts.reverse().join('');
  console.log(result);
};


console.log(typeof numToString(3456)); //returns number followed by undefined for each
console.log(typeof numToString(44));
console.log(typeof numToString(5));
console.log(typeof numToString(440));




// SUBMIT TO FORUM FOR HELP ON WHY THIS DOES NOT RETURN STRING!