/*
|--------------------------------------------------------------------------
| Perimeter sequence
|--------------------------------------------------------------------------
|
*/

function perimeterSequence(a, n) {
   return a * n * 4;
}


const perimeterSequence = (a, n) => 4 * a * n;


function perimeterSequence(a, n) {
   let res = 0;
   for (let i = 0; i < n; i++) {
      res += 4 * a;
   }
   return res;
}


console.log(perimeterSequence(1, 3), 12);