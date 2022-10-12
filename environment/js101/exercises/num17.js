// Input string of words
// Convert string to array
// Using indexing save second to last item in a variable
// Output second to last word

function secondToLast(str) {
  let splitString = str.split(" ");
  let result = splitString[splitString.length - 2];
  console.log(result);
}

secondToLast("Here is a string");
secondToLast("Two words");