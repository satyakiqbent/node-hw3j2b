class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions will have its own this binding
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
      console.log('this.sum==', this.sum);
      console.log('this.count==', this.count);
    }, this);
  }
}
const obj = new Counter();
obj.add([2, 5, 9]);
// this.sum== 2
// this.count 1
// this.sum== 7
// this.count 2
// this.sum== 16
// this.count 3
console.log(obj.count); // 3
console.log(obj.sum); // 16
//
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
