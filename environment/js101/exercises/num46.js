// Input an array
// Output array containing two nested arrays each with half the original

// Find length of array
// If length is odd slice with odd element in first array
// Create two new arrays w each half of original

function halvsies(arr) {
  let result = [];
  if (arr.length % 2) {
    let first = arr.slice(0, Math.ceil(arr.length / 2));
    let second = arr.slice(Math.ceil(arr.length / 2), arr.length);
    result.push(first);
    result.push(second);
  } else {
    let first = arr.slice(0, (arr.length / 2));
    let second = arr.slice((arr.length / 2), (arr.length));
    result.push(first);
    result.push(second);
  }
  console.log(result);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]