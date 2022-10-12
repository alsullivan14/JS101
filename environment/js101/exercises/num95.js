// Input a number
// Output computation of nth fibonacci number

// stopping condition is number equals one or two
// Decrement number each time
// Run fibonacci calculation each time using result to pass to next sequence
// Save computation as value in object and number as key

let fibSeries = {
  "1": 1, 
  "2": 1, 
}

function fibonacci(number) {
  let firstAndSecond = 1;
  if (number === 1) {
    return fibSeries[parseInt(number, 10)]
  } else if (number === 2) {
    return fibSeries[parseInt(number, 10)];
  } else {
    fibSeries[String(number)] = fibonacci(number - 2) + fibonacci(number - 1);
    return fibSeries[String(number)];
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
console.log(fibonacci(20));      // 6765