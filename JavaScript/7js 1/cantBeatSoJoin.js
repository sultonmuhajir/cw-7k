/*
|--------------------------------------------------------------------------
| If you can't beat 'em, join 'em!
|--------------------------------------------------------------------------
|
*/

function cantBeatSoJoin(numbers) {
   const x = (arr) => arr.reduce((a, b) => a + b, 0);
   return numbers
      .slice()
      .sort((a, b) => x(b) - x(a))
      .flatMap((x) => x);
}


const R = require("ramda");
const cantBeatSoJoin = R.pipe(R.sortBy(R.pipe(R.sum, R.negate)), R.flatten);


function cantBeatSoJoin(numbers) {
   return numbers
      .sort((a, b) => b.reduce((ttl, cv) => ttl + cv, 0) - a.reduce((ttl, cv) => ttl + cv, 0))
      .flat();
}


console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]), [7, 8, 5, 6, 9, 3, 4, 1, 2]);
console.log(
   cantBeatSoJoin([
      [5, 1],
      [9, 14],
      [17, 23],
      [4, 1],
      [0, 1],
   ]),
   [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]
);
console.log(
   cantBeatSoJoin([[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]),
   [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
);