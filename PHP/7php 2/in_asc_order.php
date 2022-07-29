<?php
/*
|--------------------------------------------------------------------------
| Are the numbers in order?
|--------------------------------------------------------------------------
|
*/

function in_asc_order($arr) {
   for ($i = 0; $i < count($arr)-1; $i++) {
      if ($arr[$i] > $arr[$i + 1]) return false;
   }
   return true;
}


function in_asc_order($arr) {
   $temp = $arr;
   sort($temp);
   return $temp == $arr;
}


function in_asc_order($arr) {
   $factor = true;
   while (next($arr) && $factor) { 
      $factor = (prev($arr) - next($arr) < 0) ? true : false; 
   }
   return $factor;
}


print_r(in_asc_order([1, 2, 3, 4, 5]));
print_r(in_asc_order([1, 6, 10, 18, 2, 4, 20]));