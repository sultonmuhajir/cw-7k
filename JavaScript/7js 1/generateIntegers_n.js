/*
|--------------------------------------------------------------------------
| Series of integers from 0 to n
|--------------------------------------------------------------------------
|
*/

function generateIntegers(n) {
   let res = [];
   for (let i = 0; i <= n; i++) {
      res.push(i)
   }
   return res;
}


const generateIntegers = (n) => [...Array(n + 1).keys()]


function generateIntegers(n) {
   return [...Array(n + 1)].map((_, i) => i)
}


function generateIntegers(n) {
   return Array.from({
      length: n + 1
   }, (_, i) => i)
}


console.log(generateIntegers(3), [0, 1, 2, 3]);