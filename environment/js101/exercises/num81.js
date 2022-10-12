// Input string
// Ouput same string but with first letter of each word capitalized

// split string
// for each element in list capitalize element[0]
// return joined string

function wordCap(str) {
  let toCaps = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  console.log(toCaps);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'