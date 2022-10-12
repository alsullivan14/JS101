// Input is an array of items
// Create empty array for results
// Loop through input and push to empty array
// Output every other item in new array


function oddOnes(list) {
  let result = [];
  let index = 0;
  list.forEach(el => {
    if (index % 2 !== 0) {
      index++;
    } else {
      result.push(el);
      index++
    }
  })
  console.log(result);
};

oddOnes(["Juice", "coffee", "milk", "water", "tea"]);
oddOnes(["Tea"]);
oddOnes([]);