/*
|--------------------------------------------------------------------------
| Find the Squares
|--------------------------------------------------------------------------
|
*/

function findSquares(num) {
   return `${Math.ceil(num / 2) ** 2}-${Math.floor(num / 2) ** 2}`
}


function findSquares(num) {
   return (m = ++num / 2) * m + '-' + --m * m
}


function findSquares(num) {
   return `${((num >> 1) + 1) ** 2}-${(num >> 1) ** 2}`;
}


console.log(findSquares(9), '25-16');
console.log(findSquares(5), '9-4');
console.log(findSquares(81), '1681-1600');
console.log(findSquares(25), '169-144');