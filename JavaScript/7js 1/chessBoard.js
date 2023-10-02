/*
|--------------------------------------------------------------------------
| draw me a chessboard
|--------------------------------------------------------------------------
|
*/

function chessBoard(rows, columns) {
   let res = [];
   for (let i = 0; i < rows; ++i) {
      let temp = [];
      for (let j = 0; j < columns; ++j) {
         (i + j) % 2 == 0 ? temp.push("O") : temp.push("X");
      }
      res.push(temp);
   }
   return res;
}


function chessBoard(rows, columns) {
   return [...Array(rows)].map((_, idx) => [...Array(columns)].map((_, i) => `OX`[(idx + i) & 1]));
}


function chessBoard(rows, columns) {
   return Array.from({ length: rows }, (_, i) =>
      Array.from({ length: columns }, (_, j) => "OX"[(i + j) % 2])
   );
}


console.log(chessBoard(6, 4));