// Input array of numbers
// Output sum of (sums for each subsequence after first array)

// Get total of array and assign it to count variable
// Slice array by one each time until the length of slice equals 1
// Add total of each slice to count 
// Return count


function sumOfSums(arr) {
  let count = arr.reduce((currValue, acc) => currValue + acc);
  while (arr.length > 1) {
    arr.pop();
    let subCount = arr.reduce((currValue, acc) => currValue + acc);
    count += subCount;
  }
  console.log(count);
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35