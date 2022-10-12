// Input array of strings
// Output array with all vowels deleted

// Use map
// If element is vowel replace with ""
// Else continue

function removeVowels(arr) {
  let reg = /[aeiou]/gi;
  let result = [];
  arr.forEach(str => {
    let splitWord = str.split("");
    let withoutVowels = splitWord.map(letter => letter.replace(reg, ""));
    result.push(withoutVowels.join(""));
  });
  console.log(result);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]