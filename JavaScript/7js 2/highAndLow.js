/*
|--------------------------------------------------------------------------
| Highest and Lowest
|--------------------------------------------------------------------------
|
*/

function highAndLow(numbers) {
   const arr = numbers.split(" ");
   let min = parseInt(arr[0]);
   let max = parseInt(arr[0]);
   for (let i = 0; i < arr.length; i++) {
      const int = Number(arr[i]);
      if (int < min) min = int;
      if (int > max) max = int;
   }
   return max + " " + min
}


function highAndLow(numbers) {
   numbers = numbers.split(' ').map(Number)
   var min = Math.min.apply(null, numbers)
   var max = Math.max.apply(null, numbers)
   return max + ' ' + min
}


function highAndLow(numbers) {
   var arr = numbers.split(" ");
   return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}


console.log(highAndLow("3 1 5 2"), "5 1");
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");