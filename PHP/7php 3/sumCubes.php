<?php
/*
|--------------------------------------------------------------------------
| Sum of Cubes
|--------------------------------------------------------------------------
|
*/

function sumCubes($n) {
   $res = 0;
   for ($i = 1; $i <= $n; $i++) {
      $res += $i ** 3;
   }
   return $res;
}


function sumCubes($n) {
   return $n * $n * ($n + 1) * ($n + 1) / 4;
}


function sumCubes($n) {
   if ($n == 1) return 1;
   return $n*$n*$n + sumCubes($n-1);
}


function sumCubes($n) {
   return array_reduce(range(1, $n), function ($c, $i) {
      return $c + $i**3;
   });
}


print_r(sumCubes(1) . ' ' . 1 . '
');
print_r(sumCubes(2) . ' ' . 9 . '
');
print_r(sumCubes(3) . ' ' . 36 . '
');
print_r(sumCubes(4) . ' ' . 100 . '
');
print_r(sumCubes(10) . ' ' . 3025 . '
');
print_r(sumCubes(123) . ' ' . 58155876 . '
');