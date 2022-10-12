// Input two arrays of same length
// Output new array alternating an element from each array

// Create empty result string
// Concatenate each element onto string
// Split string


function interleave(a, b) {
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result += (a[i] + b[i]);
  }
  console.log(result.split(""));
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]