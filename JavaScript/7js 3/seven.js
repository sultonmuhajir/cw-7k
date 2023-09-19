/*
|--------------------------------------------------------------------------
| A Rule of Divisibility by 7
|--------------------------------------------------------------------------
|
*/

function seven(m) {
   let n = 0;
   while (m > 99) {
      m = Math.floor(m / 10) - 2 * (m % 10);
      n++;
   }
   return [m, n];
}


function seven(m, n = 0) {
   return m < 100 ? [m, n] : seven(Math.floor(m / 10) - 2 * (m % 10), ++n);
}


function seven(m) {
   for (let n = 0; Math.floor(m / 10) >= 10; n++) {
      m = Math.floor(m / 10) - 2 * (m % 10);
   }
   return [m, n];
}


console.log(seven(1021), [10, 2]);
console.log(seven(1603), [7, 2]);
console.log(seven(371), [35, 1]);
console.log(seven(483), [42, 1]);