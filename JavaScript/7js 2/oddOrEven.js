/*
|--------------------------------------------------------------------------
| Odd or Even?
|--------------------------------------------------------------------------
|
*/

function oddOrEven(array) {
   let hsl = 0;
   for (let i in array) {
      hsl += array[i];
   }
   return hsl % 2 == 0 ? "even" : "odd";
}


const oddOrEven = arr => ["even", "odd"][Math.abs(arr.reduce((a, b) => a + b, 0)) % 2];


function oddOrEven(arr) {
   return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}


function oddOrEven(array) {
   return array.filter(number => number & 1).length & 1 ? 'odd' : 'even';
}


console.log(oddOrEven([0, 1, 5]), 'even')
console.log(oddOrEven([0, 1, 3]), 'even')
console.log(oddOrEven([1023, 1, 2]), 'even')