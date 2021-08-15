/*
|--------------------------------------------------------------------------
| Find the divisors!
|--------------------------------------------------------------------------
|
*/

function divisors(integer) {
   let res = [];
   for (let i = 1; i <= integer / 2; i++) {
      if ((integer / i) % 1 == 0 && i != 1) {
         res.push(i);
      }
   }
   return res.length != 0 ? res : `${integer} is prime`;
}


function divisors(integer) {
   let divisors = Array(integer - 2).fill('').map((v, i) => i + 2).filter(v => integer % v === 0);
   return divisors.length === 0 ? (integer + " is prime") : divisors;
}


function divisors(integer) {
   const divisors = Array
      .from({
         length: integer
      }, (_, i) => i)
      .filter(i => i !== 1 && integer % i === 0)

   return divisors.length === 0 ? `${integer} is prime` : divisors
}


console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(25), [5]);
console.log(divisors(13), "13 is prime");