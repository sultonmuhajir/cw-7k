/*
|--------------------------------------------------------------------------
| Factorial
|--------------------------------------------------------------------------
|
*/

function factorial(n) {
   if (n < 0 || n > 12) throw new RangeError();
   res = 1;
   for (let i = 1; i <= n; i++) res *= i;
   return res;
}


const factorial = (ǃ = (n) => (n > 12 ? thrown : n ? n * ǃ(n - 1) : 1));


function factorial(n) {
   if (n < 0 || n > 12) throw new RangeError();
   return n ? n * factorial(n - 1) : 1;
}


console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);
