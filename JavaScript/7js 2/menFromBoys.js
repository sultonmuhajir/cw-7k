/*
|--------------------------------------------------------------------------
| Sort Out The Men From Boys
|--------------------------------------------------------------------------
|
*/

function menFromBoys(arr) {
   return [
      ...new Set([
         ...arr.filter((v) => v % 2 == 0).sort((a, b) => a - b),
         ...arr.filter((v) => v % 2 != 0).sort((a, b) => b - a),
      ]),
   ];
}


function menFromBoys(arr) {
   arr = Array.from(new Set(arr));
   let odd = arr.filter((a) => a % 2).sort((a, b) => b - a);
   let even = arr.filter((a) => a % 2 === 0).sort((a, b) => a - b);
   return even.concat(odd);
}


function menFromBoys(arr) {
   [...new Set(arr)].sort((a, b) =>
      a % 2 && b % 2 ? (b > a ? 1 : -1) : a % 2 ? 1 : b % 2 ? -1 : a > b ? 1 : -1
   );
}


console.log(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
console.log(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
console.log(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);