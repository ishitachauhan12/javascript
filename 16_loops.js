var text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
console.log(text);

const person = { fname: "John", lname: "Doe", age: 25 };

let text1 = "";
for (let x in person) {
  text1 += person[x];
}

console.log(text1);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

console.log(txt);

let language = "JavaScript";

let text2 = "";
for (let x of language) {
  text2 += x;
}
console.log(text2);

var t;
while (i < 10) {
  t += "The number is " + i + "\n";
  i++;
}

console.log(t);

var t1;
do {
  t1 += "The number is " + i + "\n";
  i++;
} while (i < 10);

console.log(t1);
