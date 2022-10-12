// Input positive integer
// Ouput number with digits reversed

// Make number into string
// Using slice or reverse, reverse string
// Return result converted to number

function reverseNumber(num) {
  let result = String(num).split("").reverse().join("");
  console.log(parseInt(result));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1