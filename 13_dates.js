const d = new Date();
const d1 = new Date("2022-03-25");
console.log(d, d1);

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

// JavaScript counts months from 0 to 11:

// January = 0.

// December = 11.
// !!!!!Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

//One and two digit years will be interpreted as 19xx:

console.log(d.toString());

//The toDateString() method converts a date to a more readable format:

//The toUTCString() method converts a date to a string using the UTC standard:

// getFullYear() 	Get year as a four digit number (yyyy)
// getMonth() 	Get month as a number (0-11)
// getDate() 	Get day as a number (1-31)
// getDay() 	Get weekday as a number (0-6)
// getHours() 	Get hour (0-23)
// getMinutes() 	Get minute (0-59)
// getSeconds() 	Get second (0-59)
// getMilliseconds() 	Get millisecond (0-999)
// getTime() 	Get time (milliseconds since January 1, 1970)

// setDate() 	Set the day as a number (1-31)
// setFullYear() 	Set the year (optionally month and day)
// setHours() 	Set the hour (0-23)
// setMilliseconds() 	Set the milliseconds (0-999)
// setMinutes() 	Set the minutes (0-59)
// setMonth() 	Set the month (0-11)
// setSeconds() 	Set the seconds (0-59)
// setTime() 	Set the time (milliseconds since January 1, 1970)

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

console.log(text);
