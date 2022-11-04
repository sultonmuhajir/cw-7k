<?php
/*
|--------------------------------------------------------------------------
| Greatest common divisor
|--------------------------------------------------------------------------
|
*/

function mygcd($x, $y) {
   return $y ? mygcd($y, $x % $y) : $x;
}


function mygcd($x, $y) {
   while($y && $x) {
      list($y, $x) = [$x%$y, $y];
   }
   return $x;
}


function mygcd($x, $y) {
   while ($y != 0){
      $t = $x % $y;
      $x = $y;
      $y = $t;
   }
   return $x;
}


print_r(mygcd(30, 12) . ' ' . 6 . '
');
print_r(mygcd(8, 9) . ' ' . 1 . '
');
print_r(mygcd(1, 1) . ' ' . 1 . '
');