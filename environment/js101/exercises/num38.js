// Input a string
// Make letters uppercase
// strip non alpha characters
// call palindrome function
// Output true if case insensitive string is palindrome false otherwise


function isRealPalindrome(str) {
  let onlyAlpha = str.replace(/[^a-z0-9]+/gi, "")
  let allCaps = onlyAlpha.toUpperCase();

  console.log(allCaps === allCaps.split("").reverse().join(""));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false