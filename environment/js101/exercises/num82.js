// Input string
// Output same string with each alphabetic character in opposite case

// Check if element is a letter
// If element is not a letter do nothing
// If element is a letter change case


function swapCase(str) {
  //let letters = str.match(/[a-z]/gi);
  let swap = str.split("").map(char => char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join("");
  console.log(swap);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"