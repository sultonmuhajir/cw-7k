/*
|--------------------------------------------------------------------------
| Nice Array
|--------------------------------------------------------------------------
|
*/

function isNice(arr) {
   let res = 0;
   arr.forEach(i => {
      if (arr.includes(i + 1) || arr.includes(i - 1)) res += 1;
   });
   return arr.length != 0 && res == arr.length
}


function isNice(arr) {
   return !!arr.length && arr.every(x => arr.some(y => y === x - 1 || y === x + 1));
}


function isNice(arr) {
   return Boolean(arr.length) && arr.every(e => arr.includes(e - 1) || arr.includes(e + 1));
}


function isNice(arr) {
   return arr.length > 0 && arr.every(e => arr.some(x => Math.abs(e - x) === 1));
}


console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([]), false);