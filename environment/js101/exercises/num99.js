// Input a year
// Output the number of Friday the 13ths fall in that year

// Year will be greater than 1752

// Get 13th day of each month and store in variable
// Check each value of the day of the week
// Return count

function fridayThe13ths(year) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let thirteens = months.map(month => new Date(`${month} 13, ${year}`));
  let isFriday = thirteens.map(date => date.getDay()).filter(num => num === 5).length;
  console.log(isFriday);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2