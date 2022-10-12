// Input string
// Output object containing three properties

// Count number of uppercase letters
// Count number of lowercase letters
// Count non letters

// Create object with properties set to zero

// Split entire string and filter based on criteria
// Set property value equal to length of returned filter array

function letterCaseCount(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  let reg = /[a-z]/g;
  let upper = str.split("").filter(letter => {// Need method other than filter?
    if (letter.toUpperCase() === letter && reg.test(letter)) {
      return letter;
    }
  }).length; 
  result.uppercase = upper;
  console.log(result);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }