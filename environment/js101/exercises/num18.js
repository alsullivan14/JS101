// Input two arguments
// 
// Output true or false if one argument evaluates to true

function xor(arg1, arg2) {
  if (arg1 && !arg2) {
    console.log(true);
  } else if (arg2 && !arg1) {
    console.log(true);
  } else {
    console.log(false);
  }
};

xor(5, 0);
xor(false, true);
xor(1, 1);
xor(true, true);


/*

Launch Solution 

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
*/