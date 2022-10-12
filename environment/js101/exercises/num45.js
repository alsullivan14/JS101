// Input two arrays
// Output an array containing union of two arrays

// Create a set from arrays
// Turn set into array to return

function union(a, b) {
  let numbers = '';
  let combine = a.concat(b);
  for (let i = 0; i < combine.length; i++) {
    if (!(numbers.includes(combine[i]))) {
      numbers += String(combine[i]);
    }
  }
  console.log(numbers.split(''));
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]