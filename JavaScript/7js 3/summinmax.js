/*
|--------------------------------------------------------------------------
| Functions of Integers on Cartesian Plane
|--------------------------------------------------------------------------
|
*/

function sumin(n) {
   return (n * (n + 1) * (2 * n + 1)) / 6;
}
function sumax(n) {
   return (n * (n + 1) * (4 * n - 1)) / 6;
}
function sumsum(n) {
   return n * n * (n + 1);
}


function sumin(n, res = 0) {
   for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) res += Math.min(a, b);
   return res;
}
function sumax(n, res = 0) {
   for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) res += Math.max(a, b);
   return res;
}
function sumsum(n, res = 0) {
   for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) res += a + b;
   return res;
}


console.log(sumin(5), 55);
console.log(sumax(8), 372);
console.log(sumsum(8), 576);
console.log(sumin(15), 1240);