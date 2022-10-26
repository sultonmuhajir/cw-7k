<?php
/*
|--------------------------------------------------------------------------
| Growth of a Population
|--------------------------------------------------------------------------
|
*/

function nbYear($p0, $percent, $aug, $p) {
   for ($i=0; $p0 < $p; $i++) { 
      $p0 = $p0 * (1 +$percent / 100) + $aug;
   }
   return $i;
}


function nbYear($p0, $percent, $aug, $p) {
   return $p0 >= $p ? 0 : 1 + nbYear((int)$p0 * (1+$percent/100) + $aug, $percent, $aug, $p);   
}


function nbYear($p0, $percent, $aug, $p) {
   $percent /= 100;
   for ($i = 0; $p0 < $p; $i++) {
      $p0 = $p0 + $p0 * $percent + $aug;
   }
   return $i;
}


function nbYear($p0, $percent, $aug, $p) {  
   if ($p0 >= $p) return 0;  
   return 1 + nbYear($p0 * ($percent/100+1) + $aug, $percent, $aug, $p); 
}


print_r(nbYear(1000, 2, 50, 1150). ' ' . 3 . '
');
print_r(nbYear(1500, 5, 100, 5000). ' ' . 15 . '
');
print_r(nbYear(1500000, 2.5, 10000, 2000000). ' ' . 10 . '
');
print_r(nbYear(1500000, 0.25, 1000, 2000000). ' ' . 94 . '
');