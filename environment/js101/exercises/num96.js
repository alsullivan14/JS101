// Input a string
// Output an object with percentage of lowercase, uppercase and neither


function letterPercentages(str) {
  let result = {lowercase: "", uppercase: "", neither: ""};
  let letters = /[a-zA-Z]/;
  str.split("").forEach(element => {
    if (letters.test(element) && element.toUpperCase() === element) {
      result["uppercase"] += element; 
    } else if (letters.test(element) && element.toLowerCase() === element) {
      result["lowercase"] += element; 
    } else {
      result["neither"] += element;
    }
  });
  let total = Object.values(result).join("").length;
  result.lowercase = (result.lowercase.length / total) * 100;
  result.uppercase = (result.uppercase.length / total) * 100;
  result.neither = (result.neither.length / total) * 100;
  console.log(result);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }