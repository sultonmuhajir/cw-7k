<?php
/*
|--------------------------------------------------------------------------
| Speed Control
|--------------------------------------------------------------------------
|
*/

function gps($s, $x) {
   if (count($x) <= 1) {
      return 0;
   } else {
      $arr = [];
      for ($i=0; $i < count($x)-1; $i++) { 
         array_push($arr, (3600 * ($x[$i + 1] - $x[$i])) / $s);
      }
      return floor(max($arr));
   }
}


function gps($s, $x) {
   for($i=1; $i<count($x); $i++) {
      $x[$i-1] = 3600 * abs($x[$i] - $x[$i-1]) / $s;
   }
   return floor(max($x));
}


function gps($s, $x) {
   return max(array_map(function($distance) use ($s) {
      return (3600 * $distance) / $s;
   }, array_map(function($start, $end) {
      return $end-$start;
   }, array_slice($x, 0, count($x)-1), array_slice($x, 1))));
}


print_r(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]) . ' ' . 41 . '
');
print_r(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]) . ' ' . 74 . '
');