// Input string
// Output true if parentheses in string are matching false otherwise

// Create a list of parentheses
// If number of parentheses is not even return false
// Find middle index
// Else if first half doesn't equal second half reversed return false
// Else return true


function getParentheses(str) {
  let list = []
  str.split("").forEach(function(elem) {
    if (elem === "(" || elem === ")") {
      list.push(elem);
    }
  })
  return list;
}

function isBalanced(str) {
  let listOfParentheses = getParentheses(str);
  let middleIndex = listOfParentheses.length / 2;
  if (listOfParentheses.length % 2) {
    console.log(false);
  } else if (!listOfParentheses.slice(0, middleIndex) === listOfParentheses.slice(middleIndex).reverse()) {
    console.log(false);
  } else (
    console.log(true));
}



isBalanced("What (is) this?");
isBalanced("((What) (is this))?");
isBalanced("((What)) (is this))?");
isBalanced("Hey!");
