/*
|--------------------------------------------------------------------------
| Currying functions: multiply all elements in an array
|--------------------------------------------------------------------------
|
*/

function multiplyAll(arr) {
   return (y) => arr.map((i) => i * y);
}


const multiplyAll = (a) => (n) => a.map((i) => i * n);


function multiplyAll(numbers) {
   return function (num) {
      return numbers.map((el) => el * num);
   };
}


console.log(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
console.log(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
console.log(multiplyAll([])(10), []);