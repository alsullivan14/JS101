// Input array of elements
// Ouput number of occurences in the list per element

// Initiate empty result object
// Use for loop to save each element as key and value as count
// Return key followed by value for each pair

function countOccurrences(arr) {
  let result = {};
  result[arr[0]] = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] in result) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  console.log(Object.entries(result));
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
                
let pets = ["dolphin", "dolphin", "gorilla", "cat", "dog", "gorilla", "dog"];

countOccurrences(vehicles);
countOccurrences(pets);