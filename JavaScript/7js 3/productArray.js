/*
|--------------------------------------------------------------------------
| Product Array (Array Series #5)
|--------------------------------------------------------------------------
|
*/

function productArray(numbers) {
   let res = [];
   for (let i = 0; i < numbers.length; i++) {
      res.push(
         numbers
            .slice(0, i)
            .concat(numbers.slice(i + 1, numbers.length))
            .reduce((a, b) => a * b)
      );
   }
   return res;
}


function productArray(numbers) {
   return numbers.map((x) => numbers.reduce((a, b) => a * b) / x);
}


function productArray(numbers) {
   let res = [];
   let temp = numbers.reduce((a, b) => a * b);
   for (let i = 0; i < numbers.length; i++) {
      res.push(temp / numbers[i]);
   }
   return res;
}


console.log(productArray([12, 20]), [20, 12]);
console.log(productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
console.log(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]);
console.log(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]);