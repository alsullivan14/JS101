// Input two arrays
// Output a new array with each element multiplied by element at corresponding index

// Create empty result array
// Use for loop to iterate through inputs
// Multiply elements and push number to new array

function multiplyList(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push((a[i] * b[i]));
  }
  console.log(result);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]