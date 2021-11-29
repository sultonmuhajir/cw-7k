/*
|--------------------------------------------------------------------------
| Simple beads count
|--------------------------------------------------------------------------
|
*/

function countRedBeads(n) {
   return n < 2 ? 0 : (n - 1) * 2
}


const countRedBeads = n => ((n || 1) - 1) * 2;
const countRedBeads = n => n && --n * 2;


function countRedBeads(n) {
   return Math.max(0, 2 * (n - 1))
}


console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);