/*
|--------------------------------------------------------------------------
| Double Trouble
|--------------------------------------------------------------------------
|
*/

function trouble(x, t) {
   let res = [x[0]];
   for (let i = 1; i < x.length; ++i) {
      if (res[res.length - 1] + x[i] != t) res.push(x[i]);
   }
   return res;
}


function trouble(x, t) {
   return x.reduce((pre, val) => (val + pre[pre.length - 1] != t ? [...pre, val] : pre), []);
}


function trouble(x, t) {
   let arr = x;
   for (let i = 1; i < arr.length; ++i) {
      while (arr[i] + arr[i - 1] === t) arr.splice(i, 1);
   }
   return arr;
}


console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
console.log(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
console.log(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
console.log(trouble([2, 6, 2], 8), [2, 2]);