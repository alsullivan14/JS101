// Input string
// Output string with words in reverse order

// Split string on space
// Reverse array
// Join array on space

function reverseSentence(str) {
  console.log(str.split(" ").reverse().join(" "));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"