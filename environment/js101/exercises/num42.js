// Input string with space separated words
// Output function that returns object containing key as length of words and value as number of words of that length without non alphabetic characters

// Separate words
// Remove any extra spaces
// Use an index to compare number of words with length(index)
// Create object entry with index as key and number as value
// Increment index
// Return object


function wordSizes(str) {
  let removeNonAlpha = str.replace(/[^a-z\s\+]/gi, "");
  let removeMultiSpace = removeNonAlpha.replace(/\s\s+/g, " ");
  let list = removeMultiSpace.split(" ");
  let result = {};
  
  for (let i = 0; i < list.length; i++) {
    let key = list[i].length;
    if(!result[key]) {
      result[key] = 0;
    }
    result[key] += 1;
  }
  console.log(result);
}

wordSizes("Hey diddle  diddle, the cat and the fiddle!");
wordSizes("Here is a test string to identify longest leeeeength");