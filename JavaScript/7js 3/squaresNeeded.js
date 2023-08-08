/*
|--------------------------------------------------------------------------
| The wheat/rice and chessboard problem
|--------------------------------------------------------------------------
|
*/

function squaresNeeded(grains) {
   return grains ? grains.toString(2).length : 0;
}


function squaresNeeded(grains) {
   return Math.ceil(Math.log2(grains + 1));
}


function squaresNeeded(grains) {
   return grains < 1 ? 0 : 1 + squaresNeeded(Math.floor(grains / 2)); 
}


console.log(squaresNeeded(0), 0);
console.log(squaresNeeded(1), 1);
console.log(squaresNeeded(2), 2);
console.log(squaresNeeded(3), 2);
console.log(squaresNeeded(4), 3);