/*
|--------------------------------------------------------------------------
| Drying Potatoes
|--------------------------------------------------------------------------
|
*/

function potatoes(p0, w0, p1) {
   return Math.floor((w0 * (100 - p0)) / (100 - p1));
}


function potatoes(p0, w0, p1) {
   return (((p0 - 100) / (p1 - 100)) * w0) | 0;
}


function potatoes(p0, w0, p1) {
   return (((100 - p0) / (100 - p1)) * w0) ^ 0;
}


console.log(potatoes(82, 127, 80), 114);
console.log(potatoes(93, 129, 91), 100);