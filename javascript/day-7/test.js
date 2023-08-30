var date = new Date(0);
date.setMinutes(2);
date.setSeconds(45); // specify value for SECONDS here
var timeString = date.toISOString().substring(11, 19);
console.log(timeString)

var date2 = new Date(0);
date2.setMinutes(2);
date2.setSeconds(43); // specify value for SECONDS here

// console.log((date - date2).toISOString())
console.log(date)
