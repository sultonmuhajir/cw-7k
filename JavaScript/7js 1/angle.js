/*
|--------------------------------------------------------------------------
| Sum of angles
|--------------------------------------------------------------------------
|
*/

function angle(n) {
   return (n - 2) * 180;
}


function angle(n) {
   let total = 0;
   for (let i = 3; i <= n; i++) {
      total += 180;
   }
   return total;
}


function angle(n) {
   return n * 180 - 360;
}


with(require('ramda'))
let angle = pipe(add(-2), multiply(180))


console.log(angle(3), 180);
console.log(angle(4), 360);
console.log(angle(5), 540);