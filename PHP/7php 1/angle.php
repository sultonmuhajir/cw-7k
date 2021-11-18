<?php
/*
|--------------------------------------------------------------------------
| Sum of angles
|--------------------------------------------------------------------------
|
*/

function angle(int $n): int {
   return ($n - 2) * 180;
}


function angle(int $n): int {
   $res = 0;
   for ($i = 3; $i <= $n; $i++) {
     $res += 180;
   }
   return $res;
}


function angle(int $n): int {
   return (2 * $n - 4) * 90;
}


function angle(int $n): int {
   return 180 + ($n - 3) * 180;
}


print_r(angle(3) . ' ' . 180 . '
');
print_r(angle(4) . ' ' . 360 . '
');
print_r(angle(5) . ' ' . 540 . '
');