// Input a string
// Output whether all letters in string are uppercase


function isUppercase(str) {
  let reg = /[a-zA-Z]/g;
  let result = true;
  if (str.length > 0) {
    let letters = str.match(reg);
    letters.forEach(char => {
      if (char !== char.toUpperCase()) {
        result = false;
      } else {
        result = true;
      }
    });
  }
  console.log(result);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true


/*
Launch Solution
function isUppercase(string) {
  return string.toUpperCase() === string;
}
*/