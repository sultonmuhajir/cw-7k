/*
|--------------------------------------------------------------------------
| Easy Line
|--------------------------------------------------------------------------
|
*/

function easyLine(n) {
   let res = 1;
   for (let i = 1; i <= n; i++) res *= (n + i) / i;
   return Math.round(Math.log(res));
}


function easyLine(n) {
   return Math.round(2 * n * Math.log(2) - 0.5 * Math.log(Math.PI * n));
}


function easyLine(n) {
   return Math.round(Math.log([...Array(n)].reduce((pre, _, idx) => (pre * (++idx + n)) / idx, 1)));
}


console.log(easyLine(7), 8);
console.log(easyLine(13), 16);
console.log(easyLine(17), 22);
console.log(easyLine(19), 24);