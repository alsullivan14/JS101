// Input two integers
// Output array with number of elements equal to first integer, each number is increasing mutliple of second integer

// If first integer is zero, return empty array
// Create a multiple variable that gets incremented in each loop((1st integer) times)


function sequence(num1, num2) {
  let result = [];
  let multiple = 1;
  
  for (let i = 0; i < num1; i++) {
    let number = num2 * multiple;
    result.push(number);
    multiple++;
  }
  console.log(result);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []