///////////////////////////////////////////////concat
/*
const array2 = new Int32Array([1.1, 1.9, -1.1, -Infinity, +Infinity, NaN, -0]);
console.log(array2);
// Int32Array(6) [ 1, 1, -1, 0, 0, 0 ]
//*/
/*const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
//*/
///////////////////////////////////////////////copyWithin
//*
const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
console.log(array1.copyWithin(0, 1, 3));
// Expected output: Array ["d", "e", "e", "d", "e"]
console.log(array1.copyWithin(-1, 1, 3));
// target = target + array.length ; start = 1; end = 3
// Expected output: Array ["d", "e", "e", "d", "e"]
const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array2.copyWithin(-1, 1));
// Expected output: Array [ 'a', 'b', 'c', 'd', 'e', 'b' ]
console.log([1, , 3].copyWithin(2, 1, 2));
// [1, empty, empty]
///////////////////////////////
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

//*/
