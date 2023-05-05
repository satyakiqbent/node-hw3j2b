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
