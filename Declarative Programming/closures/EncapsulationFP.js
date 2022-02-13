// Encapsulation For Functional Programming

const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      if (count > 0) count--;
    },
    getResult() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getResult()); // will print 2
