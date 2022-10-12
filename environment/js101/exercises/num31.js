// Input three test scores
// Average three numbers
// Create conditional statements with grading rubric
// Ouput corresponding letter grade of average score

function gradeTests(test1, test2, test3) {
  let average = (test1 + test2 + test3) / 3;

  if (90 <= average && average <= 100) {
      console.log('A');
  } else if (80 <= average && average < 90) {
      console.log('B');
  } else if (70 <= average && average < 80) {
      console.log('C');
  } else if (60 <= average && average < 70) {
      console.log('D');
  } else {
      console.log('F');
  }
}


gradeTests(71, 90, 85);
gradeTests(99, 97, 95);
gradeTests(43, 60, 55);
gradeTests(77, 72, 74);