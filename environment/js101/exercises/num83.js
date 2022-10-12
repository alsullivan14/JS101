// Input string
// Ouput every other letter capitalized

// If index is even and element is a letter, capitalize it
// Otherwise lowercase it

function staggeredCase(str) {
  let result = str.split("");
  for (let i = 0; i < str.length; i++) {
    let isEvenOrZero = i % 2 === 0 || i === 0 ? true : false;
    if (isEvenOrZero) {
      result[i] = str[i].toUpperCase();
    } else {
      result[i] = str[i].toLowerCase();
    }
  }
  console.log(result.join(""));
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"