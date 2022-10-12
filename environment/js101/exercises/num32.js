// Input a string of alphabetic and non-alphabetic characters
// Use regex to match all letters
// Output a string with all non-alphabetic characters replaced by spaces

function cleanWord(str) {
  let letters = str.replace(/[^a-z]+/gi, " ");
  let result = letters.replace(/\s+/gi, " ");
  
  console.log(result);
}

cleanWord("---what's my +*& line?");