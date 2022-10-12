// Input array of numbers
// Add each element to sum and replace item at current index with sum
// Output array with each element of array added to the last

function runningTotal(arr) {
  let sum = arr[0];
  let result = [arr[0]];
  
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  console.log(result);
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []