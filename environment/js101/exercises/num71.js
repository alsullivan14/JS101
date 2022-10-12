// Input string
// Output a list of all substrings

// Return list of all substrings that start at the first letter and gradually get longer

// Create empty results list
// Create a count variable starting at 1
// For loop as long as string
// On each iteration increase count by 1 and append slice to result list

function leadingSubstrings(word) {
  let result = [];
  for (let i = 1; i < (word.length + 1); i++) {
    result.push(word.slice(0, i));
  }
  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]