console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite('undefined')); // false
console.log(Number.isFinite(undefined)); // false

console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(2e64)); // true

console.log(Number.isFinite(null)); // false
console.log(isFinite(null)); // true
console.log(Number.isFinite('null')); // false
console.log(isFinite('null')); // false

console.log(isFinite('0')); // true; coerced to number 0
console.log(Number.isFinite('0')); // false
