/*
|--------------------------------------------------------------------------
| The reject() function
|--------------------------------------------------------------------------
|
*/

function reject(array, predicate) {
   return array.filter((x) => !predicate(x));
}


const reject = (array, predicate) => array.filter((x) => !predicate(x));


function reject(array, iterator) {
   return array.filter(function (x) {
      return !iterator(x);
   });
}


console.log(
   reject([1, 2, 3, 4, 5, 6], function (num) {
      return num % 2 == 0;
   }),
   [1, 3, 5]
);