// Input string
// Output all possible substrings that are palindromes

// If string is more than one character and palindrome append to a result list
// Return result list


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
  return finalResult;
}

function palindromes(str) {
  let palindromeResult = [];
  let substringList = substrings(str);
  let flattened = substringList.reduce((acc, val) => acc.concat(val), []);
  
  flattened.forEach(elem => {
    if (elem.length > 1 && elem.split("").reverse().join("") === elem) {
      palindromeResult.push(elem);
    }
  });
  console.log(palindromeResult);
  
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]