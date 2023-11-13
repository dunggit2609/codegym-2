const sum1 = (a, b) => a + b;
const sum2 = (a, b) => {
  const c = a + b;
  console.log("this:",this);
  return c;
};

const result1 = sum1(1, 2);
const result2 = sum2(1, 2);

console.log("result 1:", result1);
console.log("result 2:", result2);
