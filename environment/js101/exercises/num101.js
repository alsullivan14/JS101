// Input number
// Output difference between square of sums and sum of squares

// Compute sum of count
// Square number

// Compute square of count
// Add numbers

// Subtract first from second


function sumSquareDifference(num) {
  let numbers = [];
  let squareOfSum;
  let sumOfSquares;
  for (let index = num; index > 0; index--) {
    numbers.push(index);
  }
  squareOfSum = numbers.reduce((curr, next) => curr + next)**2;
  sumOfSquares = numbers.map(num => num**2).reduce((curr, next) => curr + next);
  console.log(squareOfSum - sumOfSquares);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
//sumSquareDifference(100);    // 25164150