/*
|--------------------------------------------------------------------------
| Principal Diagonal | VS | Secondary Diagonal
|--------------------------------------------------------------------------
|
*/

function diagonal(matrix) {
   let res = 0;
   let x = matrix.length - 1;
   for (let i = 0; i < matrix.length; i++) {
      res += matrix[i][i] - matrix[i][x];
      x -= 1;
   }
   return res > 0 ? "Principal Diagonal win!" : res < 0 ? "Secondary Diagonal win!" : "Draw!";
}


function diagonal(matrix) {
   let pri = matrix.reduce((a, c, i) => a + c[i], 0);
   let sec = matrix.reduce((a, c, i) => a + c[c.length - 1 - i], 0);
   return pri > sec ? "Principal Diagonal win!" : sec > pri ? "Secondary Diagonal win!" : "Draw!";
}


function diagonal(matrix) {
   const p = matrix.map((cur, ind) => cur[ind]).reduce((acc, cur) => acc + cur);
   const s = matrix
      .map((cur, ind, arr) => cur[arr.length - ind - 1])
      .reduce((acc, cur) => acc + cur);
   return p > s ? "Principal Diagonal win!" : p < s ? "Secondary Diagonal win!" : "Draw!";
}


console.log(
   diagonal([
      [2, 2, 2],
      [4, 2, 6],
      [1, 8, 2],
   ]),
   "Principal Diagonal win!"
);
console.log(
   diagonal([
      [1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1],
      [1, 8, 5, 6, 2],
      [1, 5, 2, 1, 2],
      [1, 8, 2, 6, 1],
   ]),
   "Secondary Diagonal win!"
);