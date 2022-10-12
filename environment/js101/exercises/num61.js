// Input integer
// Ouput a list of all numbers between 1 and that number, inclusive

// Create empty array
// Create for loop, incrementing i until value+1
// Add current number to array
// Return array

function sequence(num) {
  let result = [];
  for (let i = 1; i < (num + 1); i++) {
    result.push(i);
  }
  console.log(result);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
sequence(15);