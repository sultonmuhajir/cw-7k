<?php
/*
|--------------------------------------------------------------------------
| Easy Line
|--------------------------------------------------------------------------
|
*/

function easyLine($n) {
   $res = 1;
   for ($i = 1; $i <= $n; $i++) $res *= ($n + $i) / $i;
   return round(log($res));
}


function easyline($n) {
   return round(array_sum(array_map('log', range($n+1, 2*$n))) - array_sum(array_map('log', range(1, $n))));
}


function easyline($n) {
   $sum = 0;
   for ($i = 1; $i <= $n; $i++) {
      $sum += log(($n + $i) / $i);
   }
   return round($sum);
}


print_r(easyLine(7) . ' ' . 8 . '
');
print_r(easyLine(13) . ' ' . 16 . '
');
print_r(easyLine(17) . ' ' . 22 . '
');
print_r(easyLine(19) . ' ' . 24 . '
');