/*
|--------------------------------------------------------------------------
| Cut array into smaller parts
|--------------------------------------------------------------------------
|
*/

function makeParts(arr, chunkSize) {
   let res = [];
   for (let i = 0; i < arr.length; i = i + chunkSize) {
      res.push(arr.slice(i, i + chunkSize));
   }
   return res;
}


function makeParts(arr, chunkSize) {
   return [...Array(Math.ceil(arr.length / chunkSize))].map((val) => arr.splice(0, chunkSize));
}


function makeParts(arr, chunkSize) {
   let res = [];
   while (arr.length > 0) {
      res.push(arr.splice(0, chunkSize));
   }
   return res;
}


console.log(makeParts([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
console.log(makeParts([1, 2, 3], 1), [[1], [2], [3]]);
console.log(makeParts([1, 2, 3, 4, 5], 10), [[1, 2, 3, 4, 5]]);