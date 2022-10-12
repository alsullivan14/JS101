// Input floating point number between 0 and 360 degrees
// Output a representation of angle in degrees, minutes and seconds

// Digits before decimal represent degrees
// If digits after decimal, multiply decimal by 60, adding digits before decimal as minutes
// If previous number returns a  float, multiply this decimal by 60 to  get seconds, add to total


function dms(num) {
  let degrees = String(Math.floor(num)) + "*";
  let minutes = 0;
  let seconds = 0;
  if (num % 1) {
    minutes = Math.floor((num % 1).toFixed(6) * 60);
    let hundreths = (num % 1).toFixed(6) * 60; {
      if (hundreths % 1); {
        seconds = Math.floor((hundreths % 1).toFixed(3) * 60);
      }
    }
  }
  console.log(degrees + minutes + "'" + seconds + '"');
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"