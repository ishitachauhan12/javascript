// Code 	Result
// \b 	Backspace
// \f 	Form Feed
// \n 	New Line
// \r 	Carriage Return
// \t 	Horizontal Tabulator
// \v 	Vertical Tabulator

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

let text1 = 'We are the so-called "Vikings" from the north.';
let x = "John";
let y = new String("John");

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);

let text3 = "Apple, Banana, Kiwi";
let part1 = text3.slice(7);

let text4 = "Apple, Banana, Kiwi";
let part2 = text4.slice(-12);

let text5 = "Apple, Banana, Kiwi";
let part3 = text5.slice(-12, -6);

let text6 = "Please visit Microsoft!";
let newText = text6.replace("Microsoft", "W3Schools"); //replace is case sensitive

let text7 = "I love cats. Cats are very easy to love. Cats are very popular.";
let text8 = text7.toUpperCase();

let text9 = "     Hello World!     ";
let text10 = text1.trimStart();

let text11 = "     Hello World!     ";
let text12 = text1.trimEnd();

let text13 = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

let text14 = "Please locate where 'locate' occurs!";
let index1 = text.lastIndexOf("locate"); //-1 is not found

let text15 = "Please locate where 'locate' occurs!";
let index2 = text.indexOf("locate", 15);

let text16 = "Please locate where 'locate' occurs!";
text16.lastIndexOf("locate", 15);

// Template literals are not supported in Internet Explorer.
var namee = "Chetna";
const line = `My name is ${namee}`;
let firstName = "John";
let lastName = "Doe";

let text17 = `Welcome ${firstName}, ${lastName}!`;
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(
  text,
  length,
  text1,
  y,
  x == y,
  text2,
  part,
  text3,
  part1,
  part2,
  part3,
  text6,
  newText,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
  index,
  index1,
  index2,
  text16,
  text17,
  total
);
