/*
|--------------------------------------------------------------------------
| Area of an arrow
|--------------------------------------------------------------------------
|
*/

function arrowArea(a, b) {
   return (a / 2) * (b / 2);
}


function arrowArea(a, b) {
   return a * b / 4;
}


function arrowArea(a, b) {
   return 0.25 * a * b;
}


function arrowArea(a, b) {
   return Math.round(a * b / 4 * 100) / 100;
}


console.log(arrowArea(4, 2), 2);
console.log(arrowArea(7, 6), 10.5);
console.log(arrowArea(25, 25), 156.25);