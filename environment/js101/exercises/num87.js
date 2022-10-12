// Input a string of text and substring 
// Ouput text with each example of substring returned capitalized and surrounded by asterisks

// Change each instance of substring in text

// Find index of first occurence
// Change string at that location
// Using index make slice to continue to find next index and repeat

function highlightWord(substr, str) {
  let uppercaseSubstr = substr.toUpperCase();
  let wordList = str.split(" ");
  let result = [];
  for (let i = 0; i < wordList.length; i++) {
    let currentWord = wordList[i];
    if (wordList[i].toUpperCase() === uppercaseSubstr) {
      currentWord = `**${substr.toUpperCase()}**`;
    }
    result.push(currentWord);
  }
  console.log(result.join(" "));
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

highlightWord('sed', text);

