let x = 123e5; // 12300000
let y = 123e-5; // 0.00123
let z = 999999999999999; // x will be 999999999999999

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let a = 9999999999999999; // y will be 10000000000000000

// The maximum number of decimals is 17.
let b = 0.2 + 0.1;
let c = (0.2 * 10 + 0.1 * 10) / 10;

let myNumber = 2;
// Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }

let p = 2 / 0;
let q = -2 / 0;
let r = 0xff;

//Infinity is a number: typeof Infinity returns number.
let s = 1234567890123456789012345n;
let t = new BigInt(1234567890123456789012345);

// Method	Description
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number

let u = 123;
u.toString();
(123).toString();
(100 + 23).toString();

console.log(p, q, r, s, t, u, (123).toString(), (100 + 23).toString());
