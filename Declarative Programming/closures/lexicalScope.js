// Function with state or with lexical Scope

const add10And15 = (x) => {
  const x1 = x + 10;
  return () => {
    return x1 + 15;
  };
};

// let add10And15 have base memory 10
const add10 = add10And15(10);
const add15 = add10();
console.log(add15);
