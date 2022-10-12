// Input a string of text
// Find length of string
// Determine length including preceeding spaces and succeeding spaces
// Create one line or two spaces of padding around entire text
// Line 1 first and last character is plus, multiply dash x length - 2 in between
// Line 2 starts/ends with bar, spaces x length -2 in between
// Line 3 starts/ends with bar, followed by 2 spaces, string, 2 spaces
// Line 4 starts/ends with bar, spaces x length - 2 in between
// Line 5 first/last character is plus, multiply dash x length - 2 in between
// Output a string surrounded by box of horizontal dashes, vertical bars and plus signs at corner



function logInBox(str) {
  
  function someLength(arg) {
    return arg.repeat(str.length + 4);
  }
  
  let lineOneAndFive = "+" + someLength("-") + "+"
  let lineTwoAndFour = "|" + someLength(" ") + "|";
  let lineThree = "|" + "  " + str + "  " + "|";
  console.log(lineOneAndFive);;
  console.log(lineTwoAndFour);
  console.log(lineThree);
  console.log(lineTwoAndFour);
  console.log(lineOneAndFive);
}

logInBox("Beautiful box of fanciful symbols.");
logInBox(".");
logInBox("The sun shines on a winter day.");

