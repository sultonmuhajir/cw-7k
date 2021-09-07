/*
|--------------------------------------------------------------------------
| Beginner Series #3 Sum of Numbers
|--------------------------------------------------------------------------
|
*/

function getSum(a, b) {
   const arr = [];
   if (a > b)[a, b] = [b, a];
   for (let i = a; i <= b; i++) {
      arr.push(i)
   }
   return arr.reduce((x, y) => x + y);
}


function getSum(a, b) {
   let min = Math.min(a, b);
   let max = Math.max(a, b);
   return (max - min + 1) * (min + max) / 2;
}


function getSum(a, b) {
   return (a + b) * (Math.abs(a - b) + 1) / 2;
}


console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(2, 6), 20);