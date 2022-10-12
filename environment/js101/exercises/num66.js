// Input array of elements
// Output same array with elements reversed in place not using reverse() method

// Must alter array without creating new array

/*
function reverse(arr) {
  let copy = arr.slice();
  let indexToChange = copy.length - 1;
  arr.forEach(function(elem) { 
    arr[elem] = copy[indexToChange];
    indexToChange -= 1;
  });
  console.log(arr);
}// logs array with object properties as correct but are not elements of the array
*/

function reverse(arr) {
  let length = arr.length;
  let copy = arr.slice(-length, -1);
  console.log(copy);
}

let list1 = ["a", "b", "c", "d", "e"];

reverse(list1);
/*
Launch School
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}
*/