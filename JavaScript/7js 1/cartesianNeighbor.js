/*
|--------------------------------------------------------------------------
| Cartesian neighbors
|--------------------------------------------------------------------------
|
*/

function cartesianNeighbor(x, y) {
   return [
      [x-1, y+1], [x, y+1], [x+1, y+1],
      [x-1, y], [x+1, y],
      [x-1, y-1], [x, y-1], [x+1, y-1],
   ];
}


function cartesianNeighbor(x, y) {
   let arr = [];
   for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
         arr.push([i, j]);
      }
   }
   return arr.filter((f) => f + "" != [x, y] + "");
}


function cartesianNeighbor(x, y) {
   return [-1, 0, 1]
      .reduce(
         (s, v) => s.concat([-1, 0, 1].reduce((si, vi) => si.concat([[x + v, y + vi]]), [])),
         []
      )
      .filter((v) => v[0] !== x || v[1] != y);
}


console.log(cartesianNeighbor(2, 2), [
   [1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3],
]);