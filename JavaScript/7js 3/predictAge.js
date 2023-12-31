/*
|--------------------------------------------------------------------------
| Predict your age!
|--------------------------------------------------------------------------
|
*/

function predictAge(...ages) {
   let res = 0;
   for (let i in ages) res += ages[i] ** 2;
   return (Math.sqrt(res) / 2) | 0;
}


function predictAge(...args) {
   Math.hypot(...args) >> 1;
}


function predictAge(...a) {
   return ~~(a.reduce((a, x) => a + x * x, 0) ** 0.5 / 2);
}


function predictAge(...a) {
   return Math.floor(Math.sqrt(a.reduce((s, n) => s + n * n, 0)) / 2);
}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);