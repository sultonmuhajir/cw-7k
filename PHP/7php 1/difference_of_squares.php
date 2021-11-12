<?php
/*
|--------------------------------------------------------------------------
| Difference Of Squares
|--------------------------------------------------------------------------
|
*/

function difference_of_squares(int $n): int {
   return $n * ($n * $n - 1) * (3 * $n + 2) / 12;
}


function difference_of_squares(int $n): int {
   return $n ** 2 * ($n + 1) ** 2 / 4 - $n * ($n + 1) * (2 * $n + 1) / 6;
}


function difference_of_squares(int $n): int {
   return array_sum(range(1, $n))**2 - array_sum(array_map(function($e){return $e**2;},range(1, $n)));
}


function difference_of_squares(int $n): int {
   $sumNu = 0;
   $sumSq = 0;
   for ($i = 1; $i <= $n; $i++) {
      $sumNu += $i;
      $sumSq += $i * $i;
   }
   return $sumNu * $sumNu - $sumSq;
}


print_r(difference_of_squares(5) . ' ' . 170 . '
');
print_r(difference_of_squares(10) . ' ' . 2640 . '
');
print_r(difference_of_squares(100) . ' ' . 25164150 . '
');