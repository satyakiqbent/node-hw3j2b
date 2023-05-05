//*
const sparseArray = ['first', 'second', , 'fourth'];

sparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log('sparseArray[2] is undefined'); // true
}

const nonsparseArray = ['first', 'second', undefined, 'fourth'];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// undefined
// fourth
//*/
////////////////////////////////////////////////////////////////////
// The concat() method joins two or more arrays and returns a new array.
//*
let myArray1 = ['1', '2', '3'];
myArray1 = myArray1.concat('a', 'b', 'c');
// myArray is now ["1", "2", "3", "a", "b", "c"]
//*/
////////////////////////////////////////////////////////////////////
// The join() method joins all elements of an array into a string.
//*
const myArray2 = ['Wind', 'Rain', 'Fire'];
const list = myArray2.join(' - '); // list is "Wind - Rain - Fire"
//*/
// The push() method adds one or more elements to the end of an array and returns the resulting length of the array.
//*
const myArray3 = ['1', '2'];
myArray3.push('3'); // myArray is now ["1", "2", "3"]
//*/
////////////////////////////////////////////////////////////////////
// The pop() method removes the last element from an array and returns that element.
//*
const myArray4 = ['1', '2', '3'];
const last = myArray4.pop();
// myArray is now ["1", "2"], last = "3"
//*/
////////////////////////////////////////////////////////////////////
// The shift() method removes the first element from an array and returns that element.
//*
const myArray5 = ['1', '2', '3'];
const first = myArray5.shift();
// myArray is now ["2", "3"], first is "1"
//*/
////////////////////////////////////////////////////////////////////
// The unshift() method adds one or more elements to the front of an array and returns the new length of the array.
//*
const myArray6 = ['1', '2', '3'];
myArray6.unshift('4', '5');
// myArray becomes ["4", "5", "1", "2", "3"]
//*/
////////////////////////////////////////////////////////////////////
// The unshift() method adds one or more elements to the front of an array and returns the new length of the array.
//*
const myArray7 = ['1', '2', '3'];
myArray7.unshift('4', '5');
// myArray becomes ["4", "5", "1", "2", "3"]
//*/
////////////////////////////////////////////////////////////////////
// The slice() method extracts a section of an array and returns a new array.
//*
let myArray8 = ['a', 'b', 'c', 'd', 'e'];
myArray8 = myArray8.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3
//*/
////////////////////////////////////////////////////////////////////
// The at() method returns the element at the specified index in the array, or undefined if the index is out of range. It's notably used for negative indices that access elements from the end of the array.
//*
const myArray9 = ['a', 'b', 'c', 'd', 'e'];
myArray9.at(-2); // "d", the second-last element of myArray
//*/
////////////////////////////////////////////////////////////////////
// The splice() method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.
//*
const myArray10 = ['1', '2', '3', '4', '5'];
myArray10.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
////////////////////////////////////////////////////////////////////
// The reverse() method transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.
//*
const myArray11 = ['1', '2', '3'];
myArray11.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
//*/
// The flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let myArray12 = [1, 2, [3, 4]];
myArray12 = myArray12.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
// The sort() method sorts the elements of an array in place, and returns a reference to the array.
//*
const myArray13 = ['Wind', 'Rain', 'Fire'];
myArray13.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
//*/

/*sort() can also take a callback function to determine how array elements are compared. The callback function is called with two arguments, which are two values from the array. The  function compares these two values and returns a positive number, negative number, or zero, indicating the order of the two values. For instance, the following will sort the array by the last letter of a string:
 */
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // Negative number => a < b, a comes before b
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // Positive number => a > b, a comes after b
  }
  return 0; // Zero => a = b, a and b keep their original order
};
myArray13.sort(sortFn);
// sorts the array so that myArray = ["Wind","Fire","Rain"]
////////////////////////////////////////////////////////////////////
/*if a is less than b by the sorting system, return -1 (or any negative number)
if a is greater than b by the sorting system, return 1 (or any positive number)
if a and b are considered equivalent, return 0.
*/
// The indexOf() method searches the array for searchElement and returns the index of the first match.

const a3 = ['a', 'b', 'a', 'b', 'a'];
console.log(a3.indexOf('b')); // 1

// Now try again, starting from after the last match
console.log(a3.indexOf('b', 2)); // 3
console.log(a3.indexOf('z')); // -1, because 'z' was not found
////////////////////////////////////////////////////////////////////
// The lastIndexOf() method works like indexOf, but starts at the end and searches backwards.

const a1 = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a1.lastIndexOf('b')); // 5

// Now try again, starting from before the last match
console.log(a1.lastIndexOf('b', 4)); // 1
console.log(a1.lastIndexOf('z')); // -1
////////////////////////////////////////////////////////////////////
// The forEach() method executes callback on every array item and returns undefined.
const a2 = ['a', 'b', 'c'];
a2.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c
