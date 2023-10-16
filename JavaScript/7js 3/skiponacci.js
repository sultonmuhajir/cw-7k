/*
|--------------------------------------------------------------------------
| The Skiponacci Sequence
|--------------------------------------------------------------------------
|
*/

function skiponacci(n) {
   let res = [];
   let a = 1;
   let b = 1;
   for (let i = 0; i < n; i++) {
      res.push(i % 2 == 0 ? a : "skip");
      i % 2 == 0 ? (a = a + b) : (b = a + b);
   }
   return res.join(" ");
}


function skiponacci(n, a = 1, b = 0, arr = []) {
   if (!n) return arr.map((i, ind) => (ind & 1 ? "skip" : i)).join` `;
   return skiponacci(n - 1, b, a + b, [...arr, a + b]);
}


function skiponacci(n) {
   let a = 0;
   let b = 1;
   return Array.from({ length: n }, (_, i) => {
      [a, b] = [b, a + b];
      return i & 1 ? "skip" : a;
   }).join(" ");
}


console.log(skiponacci(1), "1");
console.log(skiponacci(5), "1 skip 2 skip 5");
console.log(skiponacci(7), "1 skip 2 skip 5 skip 13");