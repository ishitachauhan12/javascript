let x = 10;
let y = 20;
let z = x + y;

let a = "10";
let b = "20";
let c = a + b;

let d = "10";
let e = 20;
let f = d + e;

let g = 10;
let h = 20;
let i = "The result is: " + g + h;

let j = "100";
let k = "10";
let l = j / k;

let m = j * k;

let n = j - k;

let o = 100 / "Apple"; //NAN
// If you use NaN in a mathematical operation, the result will also be NaN:

console.log(
  z,
  c,
  f,
  l,
  m,
  n,
  o,
  isNaN(o),
  typeof NaN,
  p,
  q,
  r,
  s,
  t,
  u,
  (123).toString(),
  (100 + 23).toString()
);
