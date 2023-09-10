/*
|--------------------------------------------------------------------------
| Pairs of integers from m to n
|--------------------------------------------------------------------------
|
*/

function generatePairs(m, n) {
   let res = [];
   for (let i = m; i <= n; i++) {
      for (let j = i; j <= n; j++) res.push([i, j]);
   }
   return res;
}


function generatePairs(m, n) {
   return m > n
      ? []
      : [...[...Array(n - m + 1)].map((_, idx) => [m, m + idx]), ...generatePairs(++m, n)];
}


function generatePairs(m, n) {
   let arr = Array(n - m + 1)
      .fill(m)
      .map((e, i) => e + i);
   return arr.reduce((a, c, i) => a.concat(arr.slice(i).map((e) => [c, e])), []);
}


console.log(generatePairs(2, 4), [
   [2, 2],
   [2, 3],
   [2, 4],
   [3, 3],
   [3, 4],
   [4, 4],
]);