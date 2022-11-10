/*
|--------------------------------------------------------------------------
| Gauß needs help! (Sums of a lot of numbers).
|--------------------------------------------------------------------------
|
*/

function f(n) {
   let res = 0;
   if (n % 1 == 0 && n > 0) {
      for (let i = 1; i <= n; i++) {
         res += i;
      }
      return res;
   } else {
      return false;
   }
}


function f(n) {
   return (parseInt(n) === n && n > 0) ? n * (n + 1) / 2 : false;
}


function f(n) {
   return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
}


function f(n) {
   return n !== (n | 0) || n < 1 ? false : n * (n + 1) / 2
}


function f(n) {
   return (n % 1 !== 0 || n <= 0) ? false : (((n + 1) * n) / 2);
}


console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f('n'), false, "n must be a number");
console.log(f(), false, "n must be a value");
console.log(f(3.14), false, "n must be an integer");
console.log(f(0), false, "a value of n greater than 0 is required");
console.log(f(-10), false, "a positive value of n is required");