/*
|--------------------------------------------------------------------------
| Check for prime numbers
|--------------------------------------------------------------------------
|
*/

function isPrime(num) {
   for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
   return num > 1;
}


const isPrime = (n, divisor = 2) =>
   n < 2 ? false : divisor === n ? true : n % divisor === 0 ? false : isPrime(n, divisor + 1);


const isPrime = (n) => {
   let m = 0;
   for (let i = 1; i <= n; i++) {
      Number.isInteger(n / i) && m++;
   }
   return m === 2;
};


const isPrime = n =>
   !/^x?$|^(xx+?)\1+$/.test(`x`.repeat(n));


const isPrime = length => length > 1 ?
   Array.from({
      length
   }, (_, i) => length % ++i === 0).filter(Boolean).length === 2 : false


console.log(isPrime(0), false)
console.log(isPrime(1), false)
console.log(isPrime(2), true)
console.log(isPrime(11), true)
console.log(isPrime(12), false)
console.log(isPrime(61), true)
console.log(isPrime(571), true)
console.log(isPrime(573), false)
console.log(isPrime(25), false)