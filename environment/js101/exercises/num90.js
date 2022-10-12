// Input a number
// Output number rotated max number of times

// Rotate number n-1 times with n being number of digits in number


function maxRotation(number) {
  let count = String(number).length - 1;
  let result = rotateString(number)
  while (count > 1) {
    result = rotateRightmostDigits(result, count);
    count -= 1;
  }
  return result;
}

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + String(rotateString(secondPart));

  return parseInt(resultString, 10);
}

function rotateString(number) {
  let strNum = String(number);
  return parseInt(strNum.slice(1) + strNum[0], 10);
}

//console.log(rotateRightmostDigits(maxRotation(735291), 5));
//console.log(rotateString(735291));
console.log(maxRotation(735291));
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845