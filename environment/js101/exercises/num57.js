// Input string
// Output string with all non-vowels doubled

// Create regex variable for all vowels
// For each string element that is not a vowel, double it
// Log result

function doubleConsonants(string) {
  let result = "";
  let vowels = /[aeiou]/gi;
  for (let i = 0; i < string.length; i++) {
    if (!vowels.test(string[i])) {
      result += (string[i] + string[i]);
    } else {
      result += string[i];
    } 
  }
  console.log(result);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
doubleConsonants('StrIng');          // "SSttrrinngg"