// Input string
// Output string with every other letter capitalized

// First letter of each string is capitalized
// If last letter was lowercase, capitalize letter

// Loop over string
// Is the element a letter? No, continue looping, yes, compare to last letter's case

// Find last letter

/*
function staggeredCaseTwo(str) {
  let result = str.split("");
  let lastLetterCaps = true;
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(result[i])) {
      result[0] = result[0].toUpperCase();
      last = result[i];
      if (last.toUpperCase() === last) {
        result[i] = result[i].toLowerCase();
      } else {
        result[i] = result[i].toUpperCase();
      }
    } else {
      continue;
    }
  }
  console.log(result.join(""));
}
*/

function staggeredCaseTwo(str) {
  let result = "";
  let isLetter = /[a-zA-Z]/;
  let lastLetterCaps = false;
  for (let i = 0; i < str.length; i++) {
    if (isLetter.test(result[i]) && lastLetterCaps === false) {
      result += str[i].toUpperCase();
      lastLetterCaps = true;
    } else if (isLetter.test(result[i]) && lastLetterCaps === true) {
      result += str[i].toLowerCase();
      lastLetterCaps = false;
    } else {
      result += str[i];
    }
  }
  console.log(result);
}

staggeredCaseTwo('I Love Launch School!');
staggeredCaseTwo('ALL_CAPS');                     
staggeredCaseTwo('ignore 77 the 4444 numbers');