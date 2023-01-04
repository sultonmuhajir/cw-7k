/*
|--------------------------------------------------------------------------
| Looking for a benefactor
|--------------------------------------------------------------------------
|
*/

function newAvg(arr, newavg) {
   const total = arr.reduce((acc, el) => acc + el, 0);
   const res = Math.ceil((arr.length + 1) * newavg - total);
   if (res <= 0) throw new Error("Expected New Average is too low");
   return res;
}


function newAvg(arr, newavg) {
   const donators = arr.length + 1;
   let remaining = newavg * donators;
   for (let donation of arr) {
      remaining -= donation;
   }
   if (remaining > 0) return Math.ceil(remaining);
   throw bs;
}


function newAvg(arr, newAvg) {
   let check = newAvg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
   if (check <= 0) {
      throw Error("Expected New Average is too low");
   }
   return Math.ceil(check);
}


console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);