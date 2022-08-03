<?php
/*
|--------------------------------------------------------------------------
| Deodorant Evaporator
|--------------------------------------------------------------------------
|
*/

function evaporator($content, $evap_per_day, $threshold) {
   $res = 0;
   $x = 100;
   while ($x >= $threshold) {
      $x -= ($x * $evap_per_day) / 100;
      $res++;
   }
   return $res;
}


function evaporator($content, $evap_per_day, $threshold) {
   return round( log( $threshold/100 ) / log( 1 - $evap_per_day/100 ) + 0.5 );
}


function evaporator($content, $evap_per_day, $threshold) {
   return ceil(log($threshold / 100, (100 - $evap_per_day) / 100));
}


print_r(evaporator(10, 10, 10) . ' ' . 22);