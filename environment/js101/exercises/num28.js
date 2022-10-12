// Input positive integer
// Log n number of characters each time, first line will end with one star and be preceeded by spaces,
// For each line after, the last space will be replaced by one more star
// Output triangle of stars with top corner to the right, bottom corner to the left



function triangle(int) {
  let start = " ".repeat(int - 1) + "*";
  console.log(start);
  let arr = start.split("");
  let indexToChange = 2;
  let i = 0;
  while (i < int - 1) {
    if (arr.includes(" ")) {
      arr[arr.length - indexToChange] = "*";
      indexToChange++;
    }
    console.log(arr.join(""));
    i++;
  }
}



triangle(3);
triangle(7);
