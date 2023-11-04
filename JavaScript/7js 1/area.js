/*
|--------------------------------------------------------------------------
| Find the area of the rectangle!
|--------------------------------------------------------------------------
|
*/

function area(d, l) {
   return Number((Math.sqrt(d ** 2 - l ** 2) * l).toFixed(2)) || "Not a rectangle";
}


function area(d, l) {
   return d > l ? +(l * (d * d - l * l) ** 0.5).toFixed(2) : "Not a rectangle";
}


function area(d, l) {
   return Math.round((d ** 2 - l ** 2) ** 0.5 * l * 1e2) / 1e2 || `Not a rectangle`;
}


console.log(area(5, 4), 12);
console.log(area(10, 6), 48);
console.log(area(13, 5), 60);
console.log(area(12, 5), 54.54);