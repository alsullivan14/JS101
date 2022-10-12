// Input two lists of numbers
// Output each combination multiplying list 1 elements with list 2 elements

// Loop over first list
// Loop over second list
// Multiply and push each time

function multiplyAllPairs(list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    for (let ii = 0; ii < list2.length; ii++) {
      result.push(list1[i] * list2[ii]);
    }
  }
  console.log(result.sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]