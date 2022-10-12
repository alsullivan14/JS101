// Input a number
// Output computation of nth fibonacci number procedurally

// stopping condition is counter equals number
// Increment number each time


function fibonacci(nth) {
  let numbers = [1, 1];
  
  for (let counter = 3; counter <= nth; counter += 1) {
    numbers = [numbers[1], numbers[0] + numbers[1]];
  }
  
  return numbers[1];
}
/*
function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}
*/

console.log(fibonacci(20));