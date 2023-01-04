/*
|--------------------------------------------------------------------------
| Over The Road
|--------------------------------------------------------------------------
|
*/

function overTheRoad(address, n) {
   return n * 2 + 1 - address;
}


function overTheRoad(address, n) {
   return n * 2 - --address;
}


function overTheRoad(address, n) {
   return n + n + 1 - address;
}


console.log(overTheRoad(2, 3), 5);
console.log(overTheRoad(3, 5), 8);
console.log(overTheRoad(7, 11), 16);