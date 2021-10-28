/*
|--------------------------------------------------------------------------
| Series of integers from m to n
|--------------------------------------------------------------------------
|
*/

function generateIntegers(m, n) {
   let res = [];
   for (let i = m; i <= n; i++) {
      res.push(i);
   }
   return res;
}


function generateIntegers(m, n) {
   return Array.from({
      length: n - m + 1
   }, (_, i) => i + m)
}


function generateIntegers(m, n) {
   return Array(n - m + 1).fill().map(() => m++);
}


function generateIntegers(m, n) {
   return [...Array(++n - m).keys()].map(i => i + m);
}


console.log(generateIntegers(2, 5), [2, 3, 4, 5]);