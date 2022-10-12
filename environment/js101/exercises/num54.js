// Input number of minutes before or after midnight
// Output time of day in 24 hour format (hh:mm)

// Check if number is positive or negative
// If negative subtract absolute value from (24 * 60)
// Divide by 60, Save hours, convert remainder to minutes, output time
// If positive,  divide by 60, save hours, convert remainder to minutes, output time

function timeOfDay(minutes) {
  let minutesRemainder = Math.abs(minutes) > 1440 ? (minutes % 1440) : minutes; 
  let hour;
  let minute;
  if (minutesRemainder < 0) {
    let minutesBeforeMidnight = (24 * 60) - Math.abs(minutesRemainder);
    hour = Math.floor(minutesBeforeMidnight / 60);
    minute = (minutesBeforeMidnight % 60);
  } else {
    hour = Math.floor(minutesRemainder / 60);
    minute = minutesRemainder % 60;
  }
  console.log(`${padNumber(hour)}:${padNumber(minute)}`);
}// If number of minutes is greater than one day(1440 minutes) need to find remainder of dividing 1440 by minutes to set up the rest


function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return num;
  }
}
timeOfDay(0) === "00:00";
timeOfDay(-3) === "23:57";
timeOfDay(35) === "00:35";
timeOfDay(-1437) === "00:03";
timeOfDay(3000) === "02:00";
timeOfDay(800) === "13:20";
timeOfDay(-4231) === "01:29";