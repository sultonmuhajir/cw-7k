<?php
/*
|--------------------------------------------------------------------------
| How many are smaller than me?
|--------------------------------------------------------------------------
|
*/

function smaller($nums) {
   return array_map(function($x, $i) use ($nums) {
      return count(array_filter(array_slice($nums, $i), function($y) use ($x) {
         return $x > $y;
      }));
   }, $nums, array_keys($nums));
}


function smaller(array $nums): array {
   return array_map(fn($i) => count(array_filter(array_slice($nums, $i + 1), fn($v) => $v < $nums[$i])), array_keys($nums));
}


function smaller(array $nums): array {
   $arr = count($nums);
   $result = array_fill(0, $arr, 0);
   for ($i = 0; $i < $arr; $i++) {
      for ($j = $i + 1; $j < $arr; $j++) {
         if ($nums[$j] < $nums[$i]) $result[$i]++;
      }
   }
   return $result;
}


print_r(smaller([5, 4, 3, 2, 1]));
print_r(smaller([1, 2, 0]));