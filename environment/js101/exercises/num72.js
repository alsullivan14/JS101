// Input string
// Output list of all possible substrings


// Order list by index position of first letter 
// For each index position order substrings beginning with this letter from shortest to longest


function leadingSubstrings(word) {
  let result = [];
  for (let i = 1; i < (word.length + 1); i++) {
    result.push(word.slice(0, i));
  }
  return result;
}


function substrings(word) {
  let finalResult = [];
  let currentWord = word;
  for (let count = 0; count < word.length; count++) {
    finalResult.push(leadingSubstrings(currentWord.slice(count)));
  }
  finalResult.forEach(elem => console.log(elem));
}

substrings('abcde');

/* 
returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/