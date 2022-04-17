/*
|--------------------------------------------------------------------------
| Sum of Array Averages
|--------------------------------------------------------------------------
|
*/

function sumAverage(arr) {
   res = 0
   arr.forEach(i => {
      res += i.reduce((a, b) => a + b) / i.length;
   });
   return Math.floor(res)
}


function sumAverage(arr) {
   return Math.floor(arr.reduce((pre, val) => pre + val.reduce((p, v) => p + v) / val.length, 0));
}


function sumAverage(arr) {
   return Math.floor(arr.map((a => a.reduce((c, d) => c + d) / a.length)).reduce((j, k) => j + k))
}


console.log(sumAverage([
   [3, 4, 1, 3, 5, 1, 4],
   [21, 54, 33, 21, 77]
]), 44);
console.log(sumAverage([
   [-4, 3, -8, -2],
   [2, 9, 1, -5],
   [-7, -2, -6, -4]
]), -6);