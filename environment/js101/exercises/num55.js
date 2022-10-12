// Input time of day in 24 hour format
// Output two functions: One that outputs minutes before midnight and the other that outputs minutes after midnight

// For beforeMidnight find total number of minutes and subtract from (24*60)

// For afterMidnight return (hours * 60) + minutes
const MIDNIGHT = 1440;
const MINUTES_PER_HOUR = 60;


function beforeMidnight(time) {
  let hourMinute = time.split(":");
  let totalMinutes = (parseInt(hourMinute[0], 10) * MINUTES_PER_HOUR) + parseInt(hourMinute[1], 10);
  let result = (totalMinutes === 0 || totalMinutes === 1440) ? console.log(0) : console.log(MIDNIGHT - totalMinutes);
}

function afterMidnight(time) {
  let hourMinute = time.split(":");
  let totalMinutes = (parseInt(hourMinute[0], 10) * MINUTES_PER_HOUR) + parseInt(hourMinute[1], 10);
  let result = (totalMinutes === 0 || totalMinutes === 1440) ? console.log(0) : console.log(totalMinutes);
}
// Midnight is 00:00 or 24:00 


afterMidnight("00:00");
beforeMidnight("00:00");
afterMidnight("12:34");
beforeMidnight("12:34");
afterMidnight("24:00");
beforeMidnight("24:00");