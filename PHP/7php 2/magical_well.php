<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #13: Magical Well
|--------------------------------------------------------------------------
|
*/

function magical_well($a, $b, $n) {
   $res = 0;
   for ($i=0; $i < $n; $i++) { 
      $res += $a * $b;
      $a += 1;
      $b += 1;
   }
   return $res;
}


function magical_well($a, $b, $n) {
   return $n === 0 ? 0 : $a * $b + magical_well($a + 1, $b + 1, $n - 1);
}


function magical_well($a, $b, $n) {
   $sum = 0;
   while ($n) {
      $sum += $a * $b;
      $a += 1;
      $b += 1;
      $n -= 1;
   }
   return $sum;
}


print_r(magical_well(1, 2, 2) . ' ' . 8 . '
');
print_r(magical_well(1, 1, 1) . ' ' . 1 . '
');
print_r(magical_well(6, 5, 3) . ' ' . 128 . '
');