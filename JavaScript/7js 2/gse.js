/*
|--------------------------------------------------------------------------
| Geometric Progression Sequence
|--------------------------------------------------------------------------
|
*/

function geometricSequenceElements(a, r, n) {
   let res = [];
   for (let i = 0; i < n; i++) {
      res.push(a);
      a *= r;
   }
   return res.join(", ");
}


function geometricSequenceElements(a, r, n) {
   return [...Array(n)].map((_, i) => a * r ** i).join(", ");
}


function geometricSequenceElements(a, r, n) {
   return Array.from({ length: n }, (_, index) => a * Math.pow(r, index)).join(", ");
}


console.log(geometricSequenceElements(2, 3, 5), "2, 6, 18, 54, 162");
console.log(geometricSequenceElements(2, 2, 10), "2, 4, 8, 16, 32, 64, 128, 256, 512, 1024");
console.log(geometricSequenceElements(1, -2, 10), "1, -2, 4, -8, 16, -32, 64, -128, 256, -512");