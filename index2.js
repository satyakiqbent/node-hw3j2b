// run `node index.js` in the terminal
console.log(`Hello Node.js v${process.versions.node}!`);
//*********************
// prototype finding
//*
const o = new TypeError(); // Inheritance: TypeError -> Error -> Object
const proto = Object.instanceOf;
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
console.log(proto(proto(proto(proto(o)))).constructor);
//*/
//*********************
/////////// arraylength syntax and uses
//*
// This creates an array with only one element: the number 42.
const arr1 = [42];

// This creates an array with no elements and arr.length set to 42.
const arr2 = Array(42);

// This is equivalent to:
const arr3 = [];
arr3.length = 42;

console.log(arr1, arr2, arr3);
// [ 42 ] [ <42 empty items> ] [ <42 empty items> ]
//*/
//*********************
///////////
//*
const event = new Date('August 19, 1975 23:15:30');
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
//*/
//*
const theBigDay = new Date();
theBigDay.setHours(7);
console.log(theBigDay);
//*/
