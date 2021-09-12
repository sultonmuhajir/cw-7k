/*
|--------------------------------------------------------------------------
| Halving Sum
|--------------------------------------------------------------------------
|
*/

function halvingSum(n) {
   let res = n
   while (Math.floor(n / 2) > 0) {
      res += Math.floor(n / 2);
      n = Math.floor(n / 2);
   }
   return res;
}


function halvingSum(n) {
   return n === 1 ? 1 : n + halvingSum(Math.floor(n / 2))
}


const halvingSum = n => n + (n > 1 && halvingSum(n >> 1));


function halvingSum(n) {
   let sum = 0;
   while (n > 0) {
      sum += n;
      n = Math.floor(n / 2);
   }
   return sum;
}


function halvingSum(n) {
   return n * 2 - eval([...n.toString(2)].join `+`)
}


console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);