<?php
/*
|--------------------------------------------------------------------------
| Perimeter sequence
|--------------------------------------------------------------------------
|
*/

function perimeter_sequence($a, $n) {
   return $a * $n * 4;
}


function perimeter_sequence($a, $n) {
   $res = 0;
   for ($i = 0; $i < $n; $i++) {
      $res += 4 * $a;
   }
   return $res;
}


print_r(perimeter_sequence(1, 3) . ' ' . 12);