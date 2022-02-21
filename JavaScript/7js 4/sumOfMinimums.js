/*
|--------------------------------------------------------------------------
| Are the numbers in order?
|--------------------------------------------------------------------------
|
*/

function sumOfMinimums(arr) {
   let res = []
   for (let i = 0; i < arr.length; i++) {
      res.push(Math.min(...arr[i]))
   }
   return res.reduce((a, b) => a + b);
}


const sumOfMinimums = (array) => array.map(el => Math.min(...el)).reduce((a, b) => a + b, 0)


const sumOfMinimums = (arr) => arr.reduce((a, b) => a + b.sort((x, z) => x - z)[0], 0)


function sumOfMinimums(arr) {
   return arr.reduce((p, c) => p + Math.min(...c), 0);
}


const _ = require('lodash/fp');
const sumOfMinimums = _.sumBy(_.min);


console.log(sumOfMinimums([
   [7, 9, 8, 6, 2],
   [6, 3, 5, 4, 3],
   [5, 8, 7, 4, 5]
]), 9);
console.log(sumOfMinimums([
   [11, 12, 14, 54],
   [67, 89, 90, 56],
   [7, 9, 4, 3],
   [9, 8, 6, 7]
]), 76);