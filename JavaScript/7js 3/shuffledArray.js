/*
|--------------------------------------------------------------------------
| Simple Fun #87: Shuffled Array
|--------------------------------------------------------------------------
|
*/

function shuffledArray(shuffled) {
   for (let i = 0; i < shuffled.length; i++) {
      let arr = shuffled.filter((e, j) => j != i);
      if (arr.reduce((a, b) => a + b) == shuffled[i]) {
         return arr.sort((a, b) => a - b);
      }
   }
}


function shuffledArray(shuffled) {
   shuffled.splice(shuffled.indexOf(shuffled.reduce((sum, e) => sum + e) / 2), 1);
   return shuffled.sort((a, b) => a - b);
}


function shuffledArray(shuffled) {
   let target = shuffled.reduce((a, b) => a + b, 0) / 2,
      x = shuffled.slice(),
      idx = x.indexOf(target);
   x.splice(idx, 1);
   return x.sort((a, b) => a - b);
}


console.log(shuffledArray([1, 12, 3, 6, 2]), [1, 2, 3, 6]);
console.log(shuffledArray([1, -3, -5, 7, 2]), [-5, -3, 2, 7]);
console.log(shuffledArray([2, -1, 2, 2, -1]), [-1, -1, 2, 2]);
console.log(shuffledArray([-3, -3]), [-3]);