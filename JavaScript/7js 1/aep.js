/*
|--------------------------------------------------------------------------
| Maximum Product
|--------------------------------------------------------------------------
|
*/

function adjacentElementsProduct(array) {
   let res = [];
   for (i = 0; i < array.length - 1; i++) {
      res.push(array[i] * array[i + 1]);
   }
   return Math.max(...res);
}


function adjacentElementsProduct(a) {
   return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}


function adjacentElementsProduct(arr) {
   for (let r = -Infinity, i = 1; i < arr.length; i++) r = Math.max(arr[i] * arr[i - 1], r);
   return r;
}


console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);