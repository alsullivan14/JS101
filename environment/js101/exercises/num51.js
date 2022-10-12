// Input positive integer
// Output a list of each digit in number

// Convert number to string
// Split string

function digitList(num) {
  let result = String(num);
  console.log(result.split(''))
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]