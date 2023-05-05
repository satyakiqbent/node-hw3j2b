/*
const arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {
//   const arrIter = arr[i];
//   console.log(arrIter);
// }

const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
//*/
////////////////////////////////////////////////////////////
/*
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
//*/
////////////////////////////////////////////////////////////
/*
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"
//*/
////////////////////////////////////////////////////////////
/*
function NotArray(len) {
  console.log('NotArray called with length', len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
//*/
/*
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
  [Symbol.isConcatSpreadable]: true,
};
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
//*/
////////////////////////////////////////////////////////////
/*setting Symbol.isConcatSpreadable to false, you can disable the default behavior:*/
//*
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
// Expected output: Array ["a", "b", "c", 1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
// Expected output: Array ["a", "b", "c", Array [1, 2, 3]]
//*/
////////////////////////////////////////////////////////////
/*For array-like objects, the default is to not spread. Symbol.isConcatSpreadable needs to be set to true in order to get a flattened array*/
/*
const x = [1, 2, 3];

const fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 'hello',
  1: 'world',
};

console.log(x.concat(fakeArray)); // [1, 2, 3, "hello", "world"]
//*/
