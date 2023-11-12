/*
|--------------------------------------------------------------------------
| Simple Fun #13: Magical Well
|--------------------------------------------------------------------------
|
*/

function magicalWell(a, b, n) {
   let res = 0;
   for (let i = 0; i < n; i++) {
      res += a * b;
      a += 1;
      b += 1;
   }
   return res;
}


function magicalWell(a, b, n) {
   return n ? a * b + magicalWell(a + 1, b + 1, n - 1) : 0;
}


function magicalWell(a, b, n) {
   let r = 0;
   for (let i = 0; i < n; i++) r += (a + i) * (b + i);
   return r;
}


function magicalWell(a, b, n) {
   let total = 0;
   while (n) {
      total += a * b;
      a++;
      b++;
      n--;
   }
   return total;
}


console.log(magicalWell(1, 2, 2), 8);
console.log(magicalWell(1, 1, 1), 1);
console.log(magicalWell(6, 5, 3), 128);