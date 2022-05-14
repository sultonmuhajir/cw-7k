<?php
/*
|--------------------------------------------------------------------------
| MinMinMax
|--------------------------------------------------------------------------
|
*/

function minMinMax($array) {
   for ($i=min($array); $i < max($array); $i++) { 
      if (in_array($i, $array) == false) {
         return [min($array), $i, max($array)];
      }
   }
}


function minMinMax($arr){
   $max = max($arr);
   $min = min($arr);
   $minAbsent = $min;
   while(in_array($minAbsent, $arr)) $minAbsent += 1;
   return [$min, $minAbsent, $max];
}


function minMinMax($array) {
   $min = min($array); $max = max($array);
   return [$min, current(array_diff(range($min, $max), $array)), $max];
}


print_r(minMinMax([-1, 4, 5, -23, 24]));
print_r(minMinMax([1, 3, -3, -2, 8, -1]));
print_r(minMinMax([2, -4, 8, -5, 9, 7]));