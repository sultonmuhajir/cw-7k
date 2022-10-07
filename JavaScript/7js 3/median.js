/*
|--------------------------------------------------------------------------
| All Star Code Challenge #14 - Find the median
|--------------------------------------------------------------------------
|
*/

function median(array) {
   const arr = array.sort((a, b) => a - b);
   const len = array.length;
   if (len % 2 == 0) {
      return (arr[len / 2] + arr[len / 2 - 1]) / 2
   } else {
      return arr[Math.floor(len / 2)]
   }
}


function median(A) {
   return A.sort((a, b) => a - b).length % 2 == 1 ? A[~~(A.length / 2)] : (A[~~(A.length / 2)] + A[~~(A.length / 2) - 1]) / 2
}


function median(array) {
   const arr = array.sort((a, b) => a - b)
   return arr.length % 2 == 1 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
}


function median(arr) {
   let set = arr.sort((a, b) => a > b)
   let mid = Math.floor(set.length / 2)
   return (set.length % 2) === 0 ? (set[mid - 1] + set[mid]) / 2 : set[mid]
}


console.log(median([3, 2, 1]), 2);
console.log(median([33, 99, 100, 30, 29, 50]), 41.5);