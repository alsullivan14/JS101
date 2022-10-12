// Input a string
// Output a string with all words of length 5 or more in reverse order

// Create empty result array
// Loop through split string
// If word has length greater than 5 split and reverse, push to result
// Else push to result
// Join words and log result


function reverseWords(sentence) {
  let result = [];
  let split = sentence.split(" ");
  
  for (let i = 0; i < split.length; i++) {
    let word;
    if (split[i].length >= 5) {
      word = split[i].split("").reverse().join("")
      result.push(word);
    } else {
      word = split[i];
      result.push(word);
    }
  }
  console.log(result.join(" "));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"