<?php
/*
|--------------------------------------------------------------------------
| Incrementer
|--------------------------------------------------------------------------
|
*/

function incrementer($nums) {
   $res = [];
   for ($i=0; $i < count($nums); $i++) { 
      array_push($res, ($nums[$i] + $i + 1) % 10);
   }
   return $res;
}


function incrementer($nums) {
   foreach ($nums as $i => &$n) {
      $n = ($n + $i + 1) % 10;
   }
   return $nums;
}


function incrementer($nums) {
   return array_map(function ($e, $i) {
      return ($e+$i+1)%10;
   }, $nums, array_keys($nums));
}


print_r(incrementer([1, 2, 3]));
print_r(incrementer([4, 6, 7, 1, 3]));