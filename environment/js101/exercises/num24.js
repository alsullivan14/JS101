// Input string
// Loop through string
// If character is equal to last character
// Replace character in original(string.replaceAll()) ? or create new string
// Output string with duplicate characters replaced by single character

function duplicates(str) {
  let letters = str.split("");
  let result = ""
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i - 1] && result.includes(letters[i])) {
      continue;
    } else {
      result += letters[i];
    }
  }
  console.log(result);
}

duplicates("HHHereee");
duplicates("issss");
duplicates("a");
duplicates("sttriinngg");