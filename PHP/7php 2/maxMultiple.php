<?php
/*
|--------------------------------------------------------------------------
| Maximum Multiple
|--------------------------------------------------------------------------
|
*/

function maxMultiple($divisor, $bound) {
   return $bound - $bound % $divisor;
}


function maxMultiple($divisor, $bound) {
   while ($bound % $divisor != 0) {
      $bound--;
   }
   return $bound;
}


function maxMultiple($divisor, $bound) {
   return intdiv($bound, $divisor) * $divisor;
}


print_r(maxMultiple(2, 7) . ' ' . 6 . '
');
print_r(maxMultiple(3, 10) . ' ' . 9 . '
');
print_r(maxMultiple(7, 17) . ' ' . 14 . '
');