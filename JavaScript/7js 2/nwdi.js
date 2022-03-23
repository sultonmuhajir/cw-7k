/*
|--------------------------------------------------------------------------
| Numbers with this digit inside
|--------------------------------------------------------------------------
|
*/

function numbersWithDigitInside(x, d) {
   let res = [];
   for (let i = 1; i <= x; i++) {
      if (String(i).includes(d)) {
         res.push(i)
      }
   }
   return res.length == 0 ? [0, 0, 0] : [res.length, res.reduce((a, b) => a + b), res.reduce((a, b) => a * b)]
}


function numbersWithDigitInside(x, d) {
   return new Array(x).fill('').map((_, i) => i + 1).filter(n => (n + '').includes(d)).reduce((a, n) => [a[0] + 1, a[1] + n, (a[2] || 1) * n], [0, 0, 0])
}


function numbersWithDigitInside(n, d) {
   let m = [];
   for (let i = 1; i <= n; i++) {
      if (new RegExp(d).test(i + "")) m.push(i);
   }
   return [m.length, m.reduce((s, c) => s + c, 0), m.length ? m.reduce((s, c) => s * c, 1) : 0];
}


function numbersWithDigitInside(x, d) {
   return [...Array(x)].reduce((pre, _, idx) => new RegExp(d).test(++idx) ? [++pre[0], pre[1] + idx, (pre[2] || 1) * idx] : pre, [0, 0, 0]);
}


console.log(numbersWithDigitInside(5, 6), [0, 0, 0]);
console.log(numbersWithDigitInside(7, 6), [1, 6, 6]);
console.log(numbersWithDigitInside(11, 1), [3, 22, 110]);
console.log(numbersWithDigitInside(20, 0), [2, 30, 200]);
console.log(numbersWithDigitInside(44, 4), [9, 286, 5955146588160]);