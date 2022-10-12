// Input a year
// Divide number by 100 to get century
// If number modulo 100 is true ^ becomes century + 1
// Using last digit of century return century plus corresponding ending
// Output a century in words according to year passed, with appropriate ending


function findCentury(year) {
  let century;
  if (year % 100) {
    century = Math.floor((year / 100)) + 1;
  } else {
    century = Math.floor(year / 100);
  }
  
  let str = String(century);
  let lastTwo = str.slice(str[str.length - 2]);
  
  let lastDigit;
  if (lastTwo === "11" || lastTwo === "12" || lastTwo === "13") {
    lastDigit = "0";
  } else {
    lastDigit = str[str.length - 1];
  }  
  //catch exception for 11, 12 , 13
  
  switch (lastDigit) {
    case "1" :
      console.log(str + "st");
      break;
    case "2" :
      console.log(str + "nd");
      break;
    case "3" :
      console.log(str + "rd");
      break;
    default:
      console.log(str + "th");
  }
}

findCentury(2000);
findCentury(2001);
findCentury(256);
findCentury(784);
findCentury(11201);