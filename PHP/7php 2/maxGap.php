<?php
/*
|--------------------------------------------------------------------------
| Maximum Gap (Array Series #4)
|--------------------------------------------------------------------------
|
*/

function maxGap($nums) {
   $res = []; sort($nums);
   for ($i=1; $i < count($nums); $i++) { 
      array_push($res, $nums[$i]-$nums[$i-1]);
   }
   return max($res);
}


function maxGap($nums) {
   sort($nums);
   return max(array_map(function ($value1, $value2) {
      return abs($value1 - $value2);
   }, array_slice($nums, 0, count($nums) - 1), array_slice($nums, 1)));
}


function maxGap($nums) {
   rsort($nums);
   for($i = 0; $i < count($nums) - 1; $i++){
      $r[] = $nums[$i]-($nums[$i+1]);
   }
   return max($r);
}


print_r(maxGap([13, 10, 2, 9, 5]) . ' ' . 4 . '
');
print_r(maxGap([13, 3, 5]) . ' ' . 8 . '
');
print_r(maxGap([24, 299, 131, 14, 26, 25]) . ' ' . 168 . '
');