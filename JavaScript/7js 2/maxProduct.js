/*
|--------------------------------------------------------------------------
| Product Of Maximums Of Array (Array Series #2)
|--------------------------------------------------------------------------
|
*/

function maxProduct(numbers, size) {
   return numbers.sort((a, b) => b - a)
      .splice(0, size)
      .reduce((x, y) => x * y, 1);
}


function maxProduct(numbers, size) {
   num = numbers.sort((a, b) => b - a)
   let res = 1
   for (let i = 0; i < size; i++) {
      res *= num[i]
   }
   return res
}


function maxProduct(numbers, size) {
   let res = 1
   let init = 0
   numbers = numbers.sort((a, b) => b - a)
   while (init < size) {
      res *= numbers[init]
      init++
   }
   return res
}


console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600);
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375);
console.log(maxProduct([-4, -27, -15, -6, -1], 2), 4);