/*
|--------------------------------------------------------------------------
| Simple consecutive pairs
|--------------------------------------------------------------------------
|
*/

function pairs(ar) {
   let count = 0;
   for (let i = 0; i < ar.length; i++) {
      if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) count++;
      i += 1;
   }
   return count;
}


function pairs([a, b, ...c]) {
   return (Math.abs(a - b) == 1) + (c.length && pairs(c));
}


function pairs(ar) {
   return ar.reduce((pre, val, idx) => pre + (++idx % 2 && Math.abs(val - ar[idx]) === 1), 0);
}


function pairs(ar) {
   return ar.length && (Math.abs(ar[0] - ar[1]) == 1) + pairs(ar.slice(2));
}


console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4);
console.log(pairs([73, 72, 8, 9, 73, 72]), 3);