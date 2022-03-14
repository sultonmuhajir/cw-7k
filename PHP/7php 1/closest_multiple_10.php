<?php
/*
|--------------------------------------------------------------------------
| Return the closest number multiple of 10
|--------------------------------------------------------------------------
|
*/

function closest_multiple_10($n) {
   return round($n / 10) * 10;
}


function closest_multiple_10($n) {
   return round($n, -1);
}


function closest_multiple_10($n) {
   return round(($n/10),0,PHP_ROUND_HALF_UP)*10;
}


print_r(closest_multiple_10(54) . ' ' . 50 . '
');
print_r(closest_multiple_10(55) . ' ' . 60 . '
');