// Input a number
// Output true if string value of number is a palindrome, false otherwise or if input is not a number

function isPalindromicNumber(num) {
  let string = String(num);
  if (Number.isInteger(num) && string === string.split("").reverse().join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true