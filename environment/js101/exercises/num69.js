// Input array of numbers
// Output sorted array

// Sort array basesd on alphabetized english spelling of corresponding word for number
// Create object which links integer to english spelling
// Create sort function which compares words alphabetically

// Sort words in place through function


let WORDS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};


// Create list of values sorted alphabetically 
// For loop over list of values
// If element in key corresponds to value, concat element
let entries = Object.entries(WORDS);


function alphabeticNumberSort(arr) {
  let keys = Object.keys(WORDS).slice();
  let result = arr.sort(function(a, b) {
    a = keys[a];
    b = keys[b];
    return a > b;
  });
  console.log(result);
}



alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
 
 
 