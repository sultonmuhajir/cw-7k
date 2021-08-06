/*
|--------------------------------------------------------------------------
| Sum of the first nth term of Series
|--------------------------------------------------------------------------
|
*/

function SeriesSum(n) {
   if (n == 0) {
      return "0.00";
   } else {
      let res = 1;
      let x = 4;
      for (let i = 1; i < n; i++) {
         let ser = 1 / x;
         res += ser;
         x += 3;
      }
      return res.toFixed(2);
   }
}


function SeriesSum(n, s = 0) {
   return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}


function SeriesSum(n) {
   for (let s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
   }
   return s.toFixed(2)
}


function SeriesSum(n) {
   for (a = 0, i = 1; i <= n * 3; i += 3) a += 1 / i;
   return a.toFixed(2);
}


function SeriesSum(n) {
   let s = 0;
   while (n) {
      s += 1 / (1 + 3 * --n);
   }
   return s.toFixed(2);
}


console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")
console.log(SeriesSum(0), "0.00")