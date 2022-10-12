function signedString(int) {
  let arrOfInts = [];
  let sign = Math.sign(int);
  let value = Math.abs(int);
  while (value > 0) {
    arrOfInts.push(value % 10);
    value = Math.floor(value / 10);
  }
  let result = arrOfInts.reverse().join('');
  if (sign < 0) {
    console.log("-" + result);
  } else {
    console.log(result);
  }
};

signedString(3456); 
signedString(44);
signedString(-5);
signedString(440);
signedString(-67);