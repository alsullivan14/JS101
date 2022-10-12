// Input a string
// Output the middle character, if even output middle two

// Check if length is even
// If even, return index[floor(str.length / 2)] + same index+1
// Else return middle index - 1

function centerOf(string) {
  if (string.length % 2) {
    let middle = Math.floor(string.length / 2);
    console.log(string[middle]);
  } else {
    let middle = string.length / 2;
    console.log(string[middle - 1] + string[middle]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"