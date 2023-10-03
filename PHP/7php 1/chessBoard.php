<?php
/*
|--------------------------------------------------------------------------
| draw me a chessboard
|--------------------------------------------------------------------------
|
*/

function chessBoard($rows, $columns) {
   $res = [];
   for ($i = 0; $i < $rows; ++$i) {
      $temp = [];
      for ($j = 0; $j < $columns; ++$j) {
         ($i + $j) % 2 == 0 ? array_push($temp, "O") : array_push($temp, "X");
      }
      array_push($res, $temp);
   }
   return $res;
}


function chessBoard($rows, $columns) {
   $res = [];
   for ($i = 0; $i < $rows; $i++) array_push($res, array_map(function ($i) {
      return $i % 2 ? "X" : "O";
   }, range($i, $i + $columns - 1)));
   return $res;
}


function chessBoard($rows, $columns) {
   $res = [];
   for ($row = 0; $row < $rows; $row++) {
      for ($column = 0; $column < $columns; $column++) {
         $res[$row][$column] = ($row + $column) % 2 ? "X" : "O";
      }
   }
   return $res;
}


print_r(chessBoard(6, 4));