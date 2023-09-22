/*
|--------------------------------------------------------------------------
| Heron's formula
|--------------------------------------------------------------------------
|
*/

function heron(a, b, c) {
   const x = (a + b + c) / 2
   return Math.sqrt(x * (x - a) * (x - b) * (x - c));
}


const heron = (a, b, c, s = (a + b + c) / 2) => Math.sqrt(s * (s - a) * (s - b) * (s - c));


function heron(...$) {
   $ = [...$]
   let S = ($[0] + $[1] + $[2]) / 2
   return +Math.sqrt(S * (S - $[0]) * (S - $[1]) * (S - $[2])).toFixed(2)
}


function heron(...$) {
   return Math.round((4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2) ** .5 * 25) / 1e2;
}


console.log(heron(3, 4, 5), 6);