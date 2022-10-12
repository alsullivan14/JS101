// Input three anles 
// Output classification of triangle based on angles

// Check if invalid
// -all angles equal 180
// -one angle equals zero

// Acute
// -all angles less than 90

// Obtuse
// -one angle greater than 90

// Right
// -one angle exactly 90

function triangle(angle1, angle2, angle3) {
  let anglesSorted = [angle1, angle2, angle3].sort();
  if (anglesSorted.reduce((curr, next) => curr + next) === 180 && anglesSorted[0] !== 0) {
    if (anglesSorted.includes(90)) {
      console.log("right");
    } else if (anglesSorted[2] < 90 && anglesSorted[1] < 90) {
      console.log("acute");
    } else {
      console.log("obtuse");
    }
  } else {
    console.log("invalid");
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"