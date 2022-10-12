// Input string of words
// Output string with each first/last letter swapped in every word

// Split string into list
// Instantiate empty results list
// For each element in the list create new string w first and last letter swapped
// Push new string to results list
// Join results on space

function swap(str) {
  let list = str.split(" ")
  let results = [];
  
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > 1) {
      let newWord = (list[i][list[i].length - 1]) + (list[i].slice(1, -1)) + (list[i][0]);
      results.push(newWord);
    } else {
      results.push(list[i]);
    }
  }
  console.log(results.join(" "));
}



swap("Here");
swap("Here and there");
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"