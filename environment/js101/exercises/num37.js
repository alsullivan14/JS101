// Input a string to check palindrome
// 
// Output true if is a palindrome false otherwise

function isPalindrome(str) {
  let charList = str.split("");
  let reversed = str.split("").reverse();
  let result = [];

  for (let i = 0; i < charList.length; i++) {
    if (charList[i] === reversed[i]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  console.log(!result.includes(false));
}


isPalindrome('madam');
isPalindrome('Madam');
isPalindrome("madam i'm adam");
isPalindrome('356653');
