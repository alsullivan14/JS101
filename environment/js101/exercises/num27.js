// Input argument representing number of digits
// Write a fibonacci function(last number + second to las number) appending answer to array each iteration
// Write function that performs fibonacci until n digits 
// When n digits is reached, return index position within fibonacci array 
// Ouput index number of first corresponding fibonacci number with arg digits 


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

function fibonacciIndex(length) {
  let resultArray = [];
  let numLength;
  let counter = 1;
  while (true) {
    resultArray.push(fibonacci(counter));
    numLength = String(fibonacci(counter)).length;
    counter++ 
    if (numLength === length) {
      console.log(resultArray.indexOf(resultArray[resultArray.length - 1]) + 1);
      break;
    }
  }
}


fibonacciIndex(2);
fibonacciIndex(3);
fibonacciIndex(10);


/*
Launch solution
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}
*/