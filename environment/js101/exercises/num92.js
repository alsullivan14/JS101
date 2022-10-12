// Input a string with spelled out numbers
// Output string with words replaced by string of their number


// Create list of spelled out numbers
// Map string to match the word to number in list
// If match then use the index of that word in nums list to replace word in sentence


function wordToDigit(str) {
  let result;
  let sentence = str.split(" ");
  let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  result = sentence.map(word => {
    word = word[word.length - 1] === "." ? word.slice(0, word.length - 1) : word;
    if (nums.includes(word)) {
      return nums.indexOf(word);
    }
    return word;
  });
  console.log(result.join(" "));
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('The weight is done.');      // "The weight is done."