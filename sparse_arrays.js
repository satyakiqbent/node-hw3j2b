//*
const arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length); // 0
console.log(arr); // []
console.log(Object.hasOwn(arr, 3.4)); // true
//*/
