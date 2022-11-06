/*
|--------------------------------------------------------------------------
| The fusc function -- Part 1
|--------------------------------------------------------------------------
|
*/

function fusc(n) {
   return n == 0 || n == 1 ? n : n % 2 == 0 ? fusc(n / 2) : fusc((n - 1) / 2) + fusc((n + 1) / 2);
}


function fusc(n) {
   if (n == 0) return 0;
   if (n == 1) return 1;
   if (n % 2 == 0) return fusc(n / 2);
   if (n % 2 != 0) return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1);
}


function fusc(n) {
   return n < 2 ? n : fusc(n >> 1) + (n & 1) * fusc(++n >> 1);
}


function fusc(n) {
   return n < 2 ? n : fusc((n / 2) | 0) + (n & 1 ? fusc(((n / 2) | 0) + 1) : 0);
}


console.log(fusc(0), 0);
console.log(fusc(1), 1);
console.log(fusc(85), 21);