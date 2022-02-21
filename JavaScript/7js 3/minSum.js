/*
|--------------------------------------------------------------------------
| Minimize Sum Of Array (Array Series #1)
|--------------------------------------------------------------------------
|
*/

function minSum(arr) {
   let res = 0;
   const array = arr.sort((a, b) => a - b);
   for (let i = 0; i < array.length / 2; i++) {
      res += array[i] * array[array.length - (i + 1)]
   }
   return res;
}


function minSum(arr) {
   return arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
}


function minSum(arr) {
   let res = 0;
   arr = arr.sort((a, b) => a - b);
   while (arr.length) {
      res += arr.pop() * arr.shift();
   }
   return res
}


function minSum(a) {
   return function minSum(a) {
      return a.length && a.shift() * a.pop() + minSum(a);
   }(a.sort((v, w) => v - w));
}


console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);