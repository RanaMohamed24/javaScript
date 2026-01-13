//task1:
let a = 5;
let b = 10;


[a, b] = [b, a];

console.log(a);
console.log(b); 


//task2
function getMinMax(...numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  return { min, max };
}
let arr = [3, 7, 1, 9, 4, 15];

let result = getMinMax(...arr);

console.log("Min value:", result.min);
console.log("Max value:", result.max);
