// Input an integer
// Output sum of digits

// Do not use loops, only method calls

// Use reduce after splitting digits?

function sum(int) {
  let digits = String(int).split("");
  let result = digits.map(x => parseInt(x));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(result.reduce(reducer, 0));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45