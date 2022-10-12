// Input string
// Output string with each character repeated twice

// Instantiate empty result string
// For each string element, add additional element, add both to empty string

function repeater(string) {
  let result = string.split("").map(el => el + el).join("");
  console.log(result);
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""