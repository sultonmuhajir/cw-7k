/*
|--------------------------------------------------------------------------
| Sum of all arguments
|--------------------------------------------------------------------------
|
*/

function sum(...arr) {
   return arr.reduce((a, b) => a + b);
}


function sum() {
   return [].reduce.call(arguments, function (sum, x) {
      return sum + x
   }, 0);
}


function sum() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
   }
   return sum;
}


function sum() {
   return Array.from(arguments).reduce((x, y) => x + y, 0);
}


console.log(sum(1), 1)
console.log(sum(1, 2), 3)
console.log(sum(5, 7, 9), 21)
console.log(sum(12, 1, 1, 1, 1), 16)
console.log(sum(12, 1, 1, 1, 1, 1, 1), 18)