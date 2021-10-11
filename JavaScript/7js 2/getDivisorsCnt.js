/*
|--------------------------------------------------------------------------
| Count the divisors of a number
|--------------------------------------------------------------------------
|
*/

function getDivisorsCnt(n) {
   let res = []
   for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
         res.push(i);
      }
   }
   return res.length;
}


const getDivisorsCnt = n => [...Array(n).keys()].reduce((a, c) => n % (c + 1) ? a : ++a, 0);
const getDivisorsCnt = (n) => Array(n + 1).fill(0).filter((_, i) => n % i === 0).length;


const getDivisorsCnt = (n, acc = 1) => {
   for (let i = 0; i < n; i++)
      acc += (n % i === 0 ? 1 : 0);
   return acc;
}


const getDivisorsCnt = (a, i = a, r = []) => {
   while (i) !(a % i--) ? r.push(1) : 0;
   return r.length
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);