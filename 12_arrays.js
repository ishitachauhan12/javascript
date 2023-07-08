const cars = ["Saab", "Volvo", "BMW"];

const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";

const cars3 = new Array("Saab", "Volvo", "BMW");

console.log(cars, cars2, cars3);
cars.toString();

// Arrays are a special type of objects.

console.log(cars);

const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon"; // Creates undefined "holes" in fruits

// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.

const points = new Array(40, 100, 1, 5, 25, 10);
const points1 = [40, 100, 1, 5, 25, 10];

// Create an array with one element:
const points3 = [40];

// Create an array with 40 undefined elements:
const points4 = new Array(40);

console.log(Array.isArray(fruits));

console.log(fruits instanceof Array);

// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()

console.log(fruits.join(" * "));
//The pop() method returns the value that was "popped out":
fruits.pop();
console.log(fruits);
//The push() method returns the new array length:
fruits.push("Kiwi");
console.log(fruits);
//<< The shift() method returns the value that was "shifted out":
fruits.shift();
console.log(fruits);
//>>fruits.unshift("Lemon");
//The unshift() method returns the new array length:
fruits.unshift("Lemon");

// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.

delete fruits[0];

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);

console.log(myChildren, myChildren2);

const myChildren3 = arr2.concat("Peter");

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();

console.log(myChildren3, newArr);

//The splice() method can be used to add new items to an array:
fruits.splice(2, 0, "Lemon", "Kiwi");

//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

//The slice() method slices out a piece of an array into a new array.
const citrus = fruits.slice(1);
console.log(fruits, citrus);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function () {
  return 0.5 - Math.random();
});

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

const numbers = [45, 4, 9, 16, 25];
let txt = 0;
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}
console.log(numbers2, txt);
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
let sum2 = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

console.log(over18, sum, sum2);

//The every() method checks if all array values pass a test.
//The some() method checks if some array values pass a test.

let position = fruits.indexOf("Apple") + 1;
console.log(position);
