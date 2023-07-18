/*
|--------------------------------------------------------------------------
| Bubblesort Once
|--------------------------------------------------------------------------
|
*/

function bubblesortOnce(a) {
   return [...a].map((e, i, x) => (e > x[i + 1] ? ((x[i] = x[i + 1]), (x[i + 1] = e), x[i]) : e));
}


function bubblesortOnce(a) {
   let res = [...a];
   for (let i = 0; i < res.length - 1; i++) {
      if (res[i] > res[i + 1]) {
         [res[i], res[i + 1]] = [res[i + 1], res[i]];
      }
   }
   return res;
}


function bubblesortOnce(a) {
   return a.reduce(
      (pre, val, idx) => (idx && val > pre[--idx] ? pre.push(val) : pre.splice(idx, 0, val), pre),
      []
   );
}


console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);