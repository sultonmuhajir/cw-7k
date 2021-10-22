<?php
/*
|--------------------------------------------------------------------------
| Are the numbers in order?
|--------------------------------------------------------------------------
|
*/

function sum_of_minimums($numbers) {
   $res = [];
   for ($i=0; $i < count($numbers); $i++) { 
      array_push($res, min($numbers[$i]));
   }
   return array_sum($res);
}


function sum_of_minimums(array $numbers): int {
   return array_sum(array_map('min', $numbers));
}


function sum_of_minimums($numbers) {
   $res = 0;
   foreach($numbers as $n) {
      $res += min($n);
   }
   return $res;
}


print_r(sum_of_minimums([
   [7, 9, 8, 6, 2],
   [6, 3, 5, 4, 3],
   [5, 8, 7, 4, 5]
]) . ' ' . 9 . '
');
print_r(sum_of_minimums([
   [11, 12, 14, 54],
   [67, 89, 90, 56],
   [7, 9, 4, 3],
   [9, 8, 6, 7]
]) . ' ' . 76 . '
');