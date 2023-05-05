/*
// Using slice, create newCar from myCar.
const myHonda = {
  color: 'red',
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
const newCar = myCar.slice(0, 2);

console.log('myCar =', myCar);
console.log('newCar =', newCar);
console.log('myCar[0].color =', myCar[0].color);
console.log('newCar[0].color =', newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is', myHonda.color);

console.log('myCar[0].color =', myCar[0].color);
console.log('newCar[0].color =', newCar[0].color);
//*/
/*
// Create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// Expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// Expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
//*/
