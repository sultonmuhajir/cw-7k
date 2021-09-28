<?php
/*
|--------------------------------------------------------------------------
| Number of People in the Bus
|--------------------------------------------------------------------------
|
*/

function number($bus_stops) {
   $x = 0;
   $y = 0;
   for ($i=0; $i < count($bus_stops); $i++) { 
      $x += $bus_stops[$i][0];
      $y += $bus_stops[$i][1];
   }
   return $x - $y;
}


function number($bus) {
   return array_sum(array_map(function($x){return $x[0]-$x[1];},$bus));
}


function number($bus_stops) {
   $res = 0;
   foreach( $bus_stops as $bus_stop ) {
      $res +=  $bus_stop[0] - $bus_stop[1];
   } 
   return $res;
}


function number($bus_stops) {
   return array_sum(array_column($bus_stops, 0)) - array_sum(array_column($bus_stops, 1));
}


print_r(number([[10, 0],[3, 5],[5, 8]]). ' ' . 5 . '
');
print_r(number([[3, 0],[9, 1],[4, 10],[12, 2],[6, 1],[7, 10]]). ' ' . 17 . '
');
print_r(number([[3, 0],[9, 1],[4, 8],[12, 2],[6, 1],[7, 8]]). ' ' . 21) . '
'; 