/*
|--------------------------------------------------------------------------
| JavaScript Array Filter
|--------------------------------------------------------------------------
|
*/

function getEvenNumbers(numbersArray) {
   return numbersArray.filter(i => i % 2 == 0);
}


const getEvenNumbers = arr => arr.filter(x => !(x & 1));


function getEvenNumbers(numbersArray) {
   const result = [];
   for (let number of numbersArray) {
      if (number % 2 === 0) {
         result.push(number);
      }
   }
   return result;
}


const getEvenNumbers = _ => _.filter(__ => __ % 2 == 0);


console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10])
console.log(getEvenNumbers([1, 2]), [2])
console.log(getEvenNumbers([12, 14, 15]), [12, 14])
console.log(getEvenNumbers([13, 15]), [])
console.log(getEvenNumbers([1, 3, 9]), [])