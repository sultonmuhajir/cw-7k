/*
|--------------------------------------------------------------------------
| The highest profit wins!
|--------------------------------------------------------------------------
|
*/

function minMax(arr) {
   return [Math.min(...arr), Math.max(...arr)]
}


const minMax = arr => [Math.min.apply(null, arr), Math.max.apply(null, arr)];


function minMax(arr) {
   let a = arr.sort(function (a, b) {
      return a - b
   });
   return [a[0], a[a.length - 1]];
}


function minMax(arr) {
   let max = arr[0];
   let min = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
   }
   return [min, max];
}


console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([2334454, 5]), [5, 2334454]);
console.log(minMax([1]), [1]);