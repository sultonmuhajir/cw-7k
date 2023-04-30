/*
|--------------------------------------------------------------------------
| How Green Is My Valley?
|--------------------------------------------------------------------------
|
*/

function makeValley(arr) {
   return [
      ...arr.sort((a, b) => b - a).filter((x, i) => !(i % 2)),
      ...arr.filter((x, i) => i % 2).reverse(),
   ];
}


function makeValley(arr) {
   let leftWing = [];
   let rightWing = [];
   arr.sort((a, b) => b - a).forEach((el, i) =>
      i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el)
   );
   return [...leftWing, ...rightWing];
}


function makeValley(arr) {
   return arr
      .sort((a, b) => b - a)
      .reduce((rtn, x, i) => rtn.splice(Math.ceil(i / 2), 0, x) && rtn, []);
}


console.log(
   makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]),
   [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
);
console.log(makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
console.log(makeValley([14, 10, 8]), [14, 8, 10]);
console.log(
   makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]),
   [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]
);
console.log(makeValley([20, 16, 14, 10, 1]), [20, 14, 1, 10, 16]);