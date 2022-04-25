/*
|--------------------------------------------------------------------------
| Simple Fun #3: Late Ride
|--------------------------------------------------------------------------
|
*/

function lateRide(n) {
   const arr = String(n % 60).split('').concat(String(Math.floor(n / 60)).split(''))
   return arr.map(i => Number(i)).reduce((a, b) => a + b);
}


function lateRide(n) {
   return [...`${n / 60 ^ 0}` + n % 60].reduce((pre, val) => pre + +val, 0);
}


function lateRide(n) {
   return [~~(n / 60), n % 60].join('').split('').reduce((a, b) => a + +b, 0);
}


console.log(lateRide(240), 4)
console.log(lateRide(808), 14)
console.log(lateRide(1439), 19)