// Input a number 
// Ouput next featured number greater than integer

// Featured numbers are odd, multiples of seven and have no repeating digits

// Divide number by seven, round down, find next multiple of seven that fits description


function featured(num) {
  let nextMultiple = Math.ceil(num / 7) * 7;
  if (multipleWithRepeat(nextMultiple)) {
    nextMultiple += 7;
  } else if (!nextMultiple % 2) {
    nextMultiple += 7;
  } else {
    console.log(nextMultiple);
  }
}


function multipleWithRepeat(number) {
  let sortedSplitString = String(number).split("").sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  for (let index = 0; index < sortedSplitString.length; index++) {
    if (sortedSplitString[index] === sortedSplitString[index + 1]) {
      console.log(true);
    }
  }
}

featured(133);

multipleWithRepeat(71223);
multipleWithRepeat(457);


/*
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
*/