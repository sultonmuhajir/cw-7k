/*
|--------------------------------------------------------------------------
| Maximum Multiple
|--------------------------------------------------------------------------
|
*/

function maxMultiple(divisor, bound) {
   for (let i = bound; i > 0; i--) {
      if (i % divisor == 0) return i
   }
}


function maxMultiple(divisor, bound) {
   return bound - bound % divisor
}


function maxMultiple(divisor, bound) {
   return Math.floor(bound / divisor) * divisor;
}


function maxMultiple(divisor, bound) {
   return (bound / divisor - bound / divisor % 1) * divisor
}


console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(7, 17), 14);