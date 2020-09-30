let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() { // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      next() { // called every iteration, to get the next value
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

//
console.log('An Simple Iterables')
for(let value of range) {
  console.log(value)
}
