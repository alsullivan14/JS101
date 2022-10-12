function leapYear(year) {
    if (year >= 1752) {
      if (year % 400 === 0) {
          console.log(true);
      }  else if (year % 100 === 0) {
          console.log(false);
      } else {
          console.log(year % 4 === 0);
      }
    } else if (year % 4 !== 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}



leapYear(2016);      // true
leapYear(2015);      // false
leapYear(2100);      // false
leapYear(2400);      // true
leapYear(240000);    // true
leapYear(240001);    // false
leapYear(2000);      // true
leapYear(1900);      // false
leapYear(1752);      // true
leapYear(1700);      // true
leapYear(1);         // false
leapYear(100);       // true
leapYear(400);       // false