// 1. Creating a Date:
// current date and time
let now = new Date();
// console.log(now); //2026-02-23T20:43:13.326Z

// specific date
let date1 = new Date("2026-02-24");
let date2 = new Date(2026,1,24);
console.log(date1); //2026-02-24T00:00:00.000Z
console.log(date2); //2026-02-23T18:30:00.000Z
// Months --> zero indexed.

// 2. Formatting Date:
let d = new Date();
// console.log(d.toString()); //Tue Feb 24 2026 02:17:50 GMT+0530 (India Standard Time)
console.log(d.toDateString()); //Tue Feb 24 2026
console.log(d.toTimeString()); //02:19:12 GMT+0530 (India Standard Time)
console.log(d.toLocaleDateString()); //2/24/2026
console.log(d.toLocaleTimeString()); //2:19:12 AM
// In India Format:
console.log(d.toLocaleDateString("en-IN")); //24/2/2026

// 3. Getting Date Values:
let date = new Date();
console.log(date.getFullYear()); //2026
console.log(date.getMonth()); //1 (feb) month is zero indexed.
console.log(date.getDate()); //24
console.log(date.getHours()); //2
console.log(date.getMinutes()); //23
console.log(date.getSeconds()); //53
console.log(date.getMilliseconds()); //284
console.log(date.getDay()); //2 (tue) //day of week (0-6)

// 4. Setting Date Values:
let date3 = new Date();
date3.setFullYear(2030);
date3.setMonth(5);
date3.setDate(10);

// 5. Timestamps:
// A timestamp = milliseconds since Jan 1, 1970.
let time = Date.now();
console.log(time);

// 6. Date Calculations 
// Difference between two dates:
let date4 = new Date("2026-02-24");
let date5 = new Date("2026-02-20");

let diff = date4 - date5;
console.log(diff); //345600000

// Convert in days: 
let days = diff/(1000 * 60 * 60 * 24);
console.log(days); //4
