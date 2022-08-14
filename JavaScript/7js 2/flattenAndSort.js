/*
|--------------------------------------------------------------------------
| Flatten and sort an array
|--------------------------------------------------------------------------
|
*/

function flattenAndSort(array) {
   let arr = [];
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
         arr.push(array[i][j]);
      }
   }
   return arr.sort((a, b) => a - b);
}


const flattenAndSort = $ => $.toString().split(',').filter(e => e).map(Number).sort((a, b) => a - b)


function flattenAndSort(array) {
   return [].concat(...array).sort((a, b) => a - b);
}


function flattenAndSort(array) {
   return array
      .reduce((result, current) => [...result, ...current], [])
      .sort((a, b) => a - b);
}


const flattenAndSort = (array) => {
   return array.reduce((acc, curr) => acc.concat(curr), []).sort((a, b) => a - b);
}


console.log(flattenAndSort([]), []);
console.log(flattenAndSort([
   [],
   []
]), []);
console.log(flattenAndSort([
   [],
   [1]
]), [1]);
console.log(flattenAndSort([
   [3, 2, 1],
   [7, 9, 8],
   [6, 4, 5]
]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([
   [1, 3, 5],
   [100],
   [2, 4, 6]
]), [1, 2, 3, 4, 5, 6, 100]);