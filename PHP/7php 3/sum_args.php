<?php
/*
|--------------------------------------------------------------------------
| Sum of all arguments
|--------------------------------------------------------------------------
|
*/

function sum() {
   return array_sum(func_get_args());
}


function sum(...$numbers) {
   $res = 0;
   foreach ($numbers as $n) {
      $res += $n;
   }
   return $res;
}


function sum(...$arr) {
   return array_sum($arr);
}


print_r(sum(1) . ' ' . 1 . '
');
print_r(sum(1, 2) . ' ' . 3 . '
');
print_r(sum(5, 7, 9) . ' ' . 21 . '
');