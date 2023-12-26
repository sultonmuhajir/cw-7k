/*
|--------------------------------------------------------------------------
| Hero's root
|--------------------------------------------------------------------------
|
*/

function intRac(n, guess) {
   return ((x) => 1 + ((guess - x) ** 2 >= 1 && intRac(n, x)))(Math.floor((guess + n / guess) / 2));
}


function intRac(n, guess) {
   let count = 1;
   while (Math.trunc(Math.sqrt(n)) != guess) {
      guess = Math.trunc((guess + n / guess) / 2);
      count += 1;
   }
   return count;
}


function intRac(n, guess, count=1) {
   let temp = Math.floor((guess + n / guess) / 2);
   return Math.abs(guess - temp) < 1 ? count : intRac(n, temp, ++count);
}


console.log(intRac(25, 1), 4);
console.log(intRac(125348, 300), 3);