/*
|--------------------------------------------------------------------------
| Nth power rules them all!
|--------------------------------------------------------------------------
|
*/

function modifiedSum(a, n) {
   return a.map(i => i ** n).reduce((a, b) => a + b) - a.reduce((a, b) => a + b)
}


function modifiedSum(a, n) {
   return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
}


function modifiedSum(arr, n) {
   let res = 0;
   for (let item of arr) {
      res += item ** n - item;
   }
   return res;
}


function modifiedSum(a, n) {
   return a.reduce((acc, curr) => acc + curr ** n - curr, 0);
}


console.log(modifiedSum([1, 2, 3], 3), 30);
console.log(modifiedSum([1, 2], 5), 30);