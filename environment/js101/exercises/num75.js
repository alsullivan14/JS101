// Input 2d array
// Output array with key appearing (value) times


// For each first element, push (second element) times


function buyFruit(list) {
  let groceryItem = [];
  let result = [];
  list.map(elem => {
    let fruit = elem[0];
    let count = elem[1];
    groceryItem.push(Array(count).fill(fruit));// How to do this with flattened list?
  });
  for (let i = 0; i < groceryItem.length; i++) {
     result = String(groceryItem).split(",");
  }
  console.log(result);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
buyFruit([['apple', 3], ['orange', 1], ['banana', 2], ['mango', 5]]);
