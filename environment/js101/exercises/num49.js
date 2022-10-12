// Input array of integers
// Output a string rounded to three decimal places which is an average of numbers

// multiply each element in array together
// divide by length
// use toFixed 3 and convert result to string

function multiplicativeAverage(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  console.log(String((result / arr.length).toFixed(3)));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"