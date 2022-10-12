// Input string of first name, space, last name
// Output last name, space first name

// Split string
// Reverse array
// Insert comma after first element
// Return result

function swapName(name) {
  let result = name.split(" ").reverse();
  result = result[0] + ", " + result[1];
  console.log(result);
}

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"