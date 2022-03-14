/*
|--------------------------------------------------------------------------
| Return the closest number multiple of 10
|--------------------------------------------------------------------------
|
*/

function closestMultiple10(num) {
   return num % 10 < 5 ? num - num % 10 : num + (10 - num % 10)
}


function closestMultiple10(num) {
   return Math.round(num / 10) * 10;
}


function closestMultiple10(num) {
   return (num / 10).toFixed() * 10;
}


console.log(closestMultiple10(54), 50);
console.log(closestMultiple10(55), 60);