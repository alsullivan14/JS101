// Input an array
// Output new array with first element appended to end of array


// If typeof argument is not an array or empty, return undefined

// Copy array argument and add last element to a sliced copy

function rotateArray(arg) {
  if (!Array.isArray(arg)) {
    console.log(undefined);
  } else if (arg.length === 0) {
    console.log([]);
  } else {
    console.log(arg.slice(1).concat(arg[0]));
  }
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);
rotateArray();