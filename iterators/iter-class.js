class SimpleIterables {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator] = () => {
    return {
      next: () => {
        // called every iteration, to get the next value
        if (this.start <= this.end) {
          return { done: false, value: this.start++ };
        } else {
          return { done: true };
        }
      }
    };
  };
}

console.log("Class Iterables..");
let c1 = new SimpleIterables(1, 10);
for (let value of c1) {
  console.log(value);
}

class SimpleGen {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator] = function* iter() {
    for (let i = this.start; i < this.end; i++) {
      yield i;
    }
  };
}

console.log("Class Gen Iterables..");
let c11 = new SimpleGen(1, 10);
for (let value of c11) {
  console.log(value);
}
