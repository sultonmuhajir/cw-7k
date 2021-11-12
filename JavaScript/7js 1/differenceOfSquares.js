/*
|--------------------------------------------------------------------------
| Difference Of Squares
|--------------------------------------------------------------------------
|
*/

function differenceOfSquares(n) {
   let res1 = 0
   let res2 = 0
   for (let i = 1; i <= n; i++) {
      res1 += i
   }
   for (let i = 1; i <= n; i++) {
      res2 += i ** 2
   }
   return res1 ** 2 - res2
}


const differenceOfSquares = x => x * (x * x - 1) * (3 * x + 2) / 12
const differenceOfSquares = n => (n * (n + 1) / 2) ** 2 - (n * (n + 1) * (2 * n + 1) / 6);


function differenceOfSquares(x) {
   return Math.pow((x * (x + 1) / 2), 2) - (x * (x + 1) * (2 * x + 1) / 6);
}


function differenceOfSquares(x) {
   let sum = 0,
      squareSum = 0,
      i;
   for (i = 1; i <= x; i++) {
      sum += i * i;
      squareSum += i;
   }
   return squareSum * squareSum - sum;
}


console.log(differenceOfSquares(5), 170)
console.log(differenceOfSquares(10), 2640)
console.log(differenceOfSquares(100), 25164150)