// Input lengths of triangle sides
// Output type of triangle

// Check if invalid
// -two shortest sides are equal to or less than longest side
// -one side equals zero

// Equilateral
// -all sides are equal

// Isosceles
// -two side are equal

// Scalene
// -all sides different

function triangle(length1, length2, length3) {
  let sidesSorted = [length1, length2, length3].sort();
  if (!(sidesSorted[0] === 0 || sidesSorted[0] + sidesSorted[1] <= sidesSorted[2])) {
    if (sidesSorted[0] === sidesSorted[1] && sidesSorted[1] === sidesSorted[2]) {
      console.log("Equilateral");
    } else if (sidesSorted[0] === sidesSorted[1] || sidesSorted[1] === sidesSorted[2]) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
  
  // How to find which two sides are not longest, add and compare to longest side?
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"