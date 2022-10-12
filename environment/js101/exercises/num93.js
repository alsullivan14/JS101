// Input a number
// Output computation of nth fibonacci number

// stopping condition is number equals one or two
// Decrement number each time
// Run fibonacci calculation each time using result to pass to next sequence

function fibonacci(number) {
  let firstAndSecond = 1;
  if (number === 1) {
    return firstAndSecond;
  } else if (number === 2) {
    return firstAndSecond;
  } else {
    return fibonacci(number - 2) + fibonacci(number - 1);
  }
}

// Launch Solution
let memo = {};
function fibonacciTwo(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.time("test");
console.log(fibonacci(12));      // 144
console.timeEnd("test");
console.time("test1");
console.log(fibonacciTwo(12));      // 144
console.timeEnd("test1");
console.log(fibonacci(20));      // 6765