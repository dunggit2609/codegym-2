const FindMax2nd = (arr, index) => {
  let max = 0;
  let max2 = 0;
  console.log(global)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max2 = max;
      max = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }

  return max2;
};


const abc = [1, 2, 3, 4, 5, 6, 10, 15, 12];
let global = 1;
const result = FindMax2nd(true, abc);
console.log("result", result);

