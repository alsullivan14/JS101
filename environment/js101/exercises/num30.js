// Input a number
// Output a number multiplied by two unless number is a double number in which case just return number

function doubleNum(int) {
  let str = String(int);
  let middle = str.length / 2;
  if (str.slice(0, middle) === str.slice(middle)) {
      console.log(int)
  } else if (str % 2) {
      console.log(int * 2);
  } else {
      console.log(int * 2);
  }
}

doubleNum(1328);
doubleNum(4444);
doubleNum(57);
doubleNum(444);
doubleNum(22);