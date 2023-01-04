/*
|--------------------------------------------------------------------------
| Are the numbers in order?
|--------------------------------------------------------------------------
|
*/

function inAscOrder(arr) {
   const temp = [...arr].sort((a, b) => a - b);
   return arr.join() == temp.join();
}


function inAscOrder(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
         return false;
      }
   }
   return true;
}


function inAscOrder(arr) {
   return arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);
}


console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 2, 3, 4, 5]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));
