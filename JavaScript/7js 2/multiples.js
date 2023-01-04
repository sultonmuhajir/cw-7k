/*
|--------------------------------------------------------------------------
| Return the first M multiples of N
|--------------------------------------------------------------------------
|
*/

function multiples(m, n) {
   let arr = [];
   for (let i = 1; i <= m; i++) {
      arr.push(n * i);
   }
   return arr;
}


function multiples(m, n) {
   return Array.from(Array(m), (_v, i) => (i + 1) * n);
}


function multiples(m, n) {
   return m ? [...arguments.callee(m - 1, n), n * m] : [];
}


function multiples(m, n) {
   return [...Array(m)].map((_, idx) => ++idx * n);
}


console.log(multiples(3, 5), [5, 10, 15]);