/*
|--------------------------------------------------------------------------
| Fibonacci's FizzBuzz
|--------------------------------------------------------------------------
|
*/

function fibsFizzBuzz(n) {
   let x = [1, 1];
   let res = [];
   for (let i = 2; i < n; i++) x.push(x[i - 1] + x[i - 2]);
   x.forEach((i) => {
      res.push(
         i % 3 == 0 && i % 5 == 0 ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i
      );
   });
   return n == 1 ? [1] : res;
}


const fibsFizzBuzz = (n) =>
   n < 2
      ? [1]
      : [...Array(n - 2)]
           .reduce((pre, _, idx) => [...pre, pre[idx] + pre[++idx]], [1, 1])
           .map((val) =>
              !(val % 15) ? `FizzBuzz` : !(val % 5) ? `Buzz` : !(val % 3) ? `Fizz` : val
           );


function fibsFizzBuzz(n) {
   let res = [],
      [a, b] = [0, 1];
   for (let i = 0; i < n; i++) {
      [a, b] = [b, a + b];
      res.push(a % 15 == 0 ? "FizzBuzz" : a % 3 == 0 ? "Fizz" : a % 5 == 0 ? "Buzz" : a);
   }
   return res;
}


console.log(fibsFizzBuzz(5), [1, 1, 2, "Fizz", "Buzz"]);
console.log(fibsFizzBuzz(1), [1]);
console.log(fibsFizzBuzz(20), [
   1,
   1,
   2,
   "Fizz",
   "Buzz",
   8,
   13,
   "Fizz",
   34,
   "Buzz",
   89,
   "Fizz",
   233,
   377,
   "Buzz",
   "Fizz",
   1597,
   2584,
   4181,
   "FizzBuzz",
]);