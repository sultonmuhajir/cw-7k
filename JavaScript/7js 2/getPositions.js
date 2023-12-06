/*
|--------------------------------------------------------------------------
| Hands Up
|--------------------------------------------------------------------------
|
*/

function getPositions(s) {
   return [s % 3, ((s / 3) | 0) % 3, ((s / 9) | 0) % 3];
}


function getPositions(s) {
   return ("000" + s.toString(3)).slice(-3).split("").map(Number).reverse();
}


function getPositions(s) {
   return [s % 3, ~~(s / 3) % 3, ~~(s / 9) % 3];
}


console.log(getPositions(54), [0, 0, 0]);
console.log(getPositions(98), [2, 2, 1]);
console.log(getPositions(3), [0, 1, 0]);