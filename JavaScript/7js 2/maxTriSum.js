/*
|--------------------------------------------------------------------------
| Maximum Triplet Sum (Array Series #7)
|--------------------------------------------------------------------------
|
*/

function maxTriSum(numbers) {
   return [...new Set(numbers)]
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b);
}


function maxTriSum(numbers) {
   return a.sort((a, b) => a - b)
      .filter((e, i) => a.lastIndexOf(e) === i)
      .slice(-3)
      .reduce((s, e) => s + e, 0);
}


function maxTriSum(numbers) {
   let ar = [...new Set(numbers)];
   let sum = 0;
   ar.sort(function (a, b) {
      return b - a
   });
   for (let i = 0; i < 3; i++) {
      sum += ar[i];
   }
   return sum;
}


console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
console.log(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);