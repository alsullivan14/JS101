// Input a number, a count input
// Output rotated number

// Use count to determine number of numbers from the end to rotate
// With this number, find index position of number to shift
// Each number after this first number gets shifted to the left
// First number appended to the end

function rotateRightmostDigits(number, count) {
  let sectionToRotate = String(number).slice(-count);
  let remainingString = String(number).slice(0, -count);
  if (remainingString.length === 0) {
    console.log(parseInt(sectionToRotate.slice(1) + sectionToRotate[0], 10));
  } else {
    console.log(parseInt(remainingString + sectionToRotate.slice(1) + sectionToRotate[0], 10));
  }
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917