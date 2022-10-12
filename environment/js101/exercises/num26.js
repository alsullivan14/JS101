// Input an integer which will be length of string
// Create a variable set at "1"
// Loop through length times adding 0 if last element was 1 and vice versa
// Output a string of alternating ones and zeroes of length string always starting with a one

function stringy(int) {
  let result = "1";
  for (let i = 0; i < int - 1 && int > 1; i++) {
    if (result[i] === "1") {
      result += "0";
    } else {
      result += "1";
    }
  }
  console.log(result);
}

stringy(9);
stringy(2);
stringy(1);


//function stringy(size) {
//  let result = "";
//  for (let idx = 0; idx < size; idx++) {
//    let number = ((idx % 2) === 0) ? 1 : 0;
//    result += number;
//  }
//  return result;
//};