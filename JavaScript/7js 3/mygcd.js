/*
|--------------------------------------------------------------------------
| Greatest common divisor
|--------------------------------------------------------------------------
|
*/

function mygcd(x, y) {
   return y ? mygcd(y, x % y) : x;
}


function mygcd(x, y) {
   while (y) {
      [x, y] = [y, x % y];
   }
   return x;
}


function mygcd(x, y) {
   for (let i = x; i > 0; i -= 1) {
      if (x % i === 0 && y % i === 0) {
         return i;
      }
   }
}


console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);