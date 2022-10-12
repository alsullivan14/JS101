// Input string
// Output a string containing each word followed by a space and the words length

// Split string on whitespace
// Map split string returning word+length

function wordLengths(str) {
  let result = str;
  if (result !== undefined && result.length > 0) {
    result = str.split(" ").map(word => word + " " + String(word.length));
    console.log(result);
  } else {
    console.log([]);
  }
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []