/*
|--------------------------------------------------------------------------
| Form The Largest
|--------------------------------------------------------------------------
|
*/

function maxNumber(n) {
   return Number(String(n)
      .split('')
      .sort()
      .reverse()
      .join(''))
}


function maxNumber(n) {
   return +n.toString().split('').sort((a, b) => b - a).join('');
}


function maxNumber(n) {
   return +[...'' + n].sort().reverse().join ``
}


function maxNumber(input) {
   let input = Array.from(String(input), Number)
   let len = input.length;
   for (let i = len - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
         if (input[j - 1] < input[j]) {
            let temp = input[j - 1];
            input[j - 1] = input[j];
            input[j] = temp;
         }
      }
   }
   return Number(input.join(''))
}


console.log(maxNumber(213), 321);
console.log(maxNumber(7389), 9873);
console.log(maxNumber(63792), 97632);
console.log(maxNumber(566797), 977665);
console.log(maxNumber(1000000), 1000000);