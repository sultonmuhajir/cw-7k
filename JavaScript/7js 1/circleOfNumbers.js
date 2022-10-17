/*
|--------------------------------------------------------------------------
| Simple Fun #2: Circle of Numbers
|--------------------------------------------------------------------------
|
*/

function circleOfNumbers(n, firstNumber) {
   let arr = [...Array(n).keys()];
   return [...arr.slice(firstNumber, n), ...arr.slice(0, firstNumber)][n / 2];
}


function circleOfNumbers(n, firstNumber) {
   return (firstNumber + n / 2) % n;
}


function circleOfNumbers(n, firstNumber) {
   let res = firstNumber + n * 0.5;
   while (res >= n) {
      res -= n;
   }
   return res;
}


console.log(circleOfNumbers(10, 2), 7);
console.log(circleOfNumbers(10, 7), 2);
console.log(circleOfNumbers(4, 1), 3);
console.log(circleOfNumbers(6, 3), 0);