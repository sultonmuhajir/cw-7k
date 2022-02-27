/*
|--------------------------------------------------------------------------
| Nth Smallest Element (Array Series #4)
|--------------------------------------------------------------------------
|
*/

function nthSmallest(arr, pos) {
   return arr.sort((a, b) => a - b)[pos - 1];
}


function nthSmallest(arr, pos) {
   let res = arr.sort((a, b) => a - b);
   let resultN = 0;
   for (let i = 0; i < res.length; i++) {
      if (i + 1 === pos) resultN = res[i];
   }
   return resultN;
}


function nthSmallest(arr, pos) {
   for (let i = 1; i < pos; i++)
      arr.splice(arr.indexOf(Math.min(...arr)), 1);
   return Math.min(...arr);
}


function nthSmallest(arr, pos) {
   for (let i = 0; i < arr.length; i++) {
      let current = arr[i]
      let j = i - 1
      while (j > -1 && current < arr[j]) {
         arr[j + 1] = arr[j]
         j--
      }
      arr[j + 1] = current
   }
   return arr[pos - 1]
}


console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([-5, -1, -6, -18], 4), -1);
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2);
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2);