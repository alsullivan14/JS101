// Input array of integers
// Output average of all elements rounded down

// Create total variable
// For each element add to total
// Return total divided by array length rounded down


function average(arr) {
  let total = 0;
  arr.forEach(x => total += x);
  console.log(Math.floor(total / (arr.length)));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40