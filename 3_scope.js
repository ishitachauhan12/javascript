{
  let x = 2; //not defined
}

var y = 10; // 10
// Here x is 10

{
  y = 3;
  var z = 2; // 2
  // Here x is 2
}

console.log(x, y, z);
