<?php
/*
|--------------------------------------------------------------------------
| Maximum Triplet Sum (Array Series #7)
|--------------------------------------------------------------------------
|
*/

function maxTriSum($nums) {
   sort($nums);
   $arr = array_reverse(array_unique($nums));
   return array_sum(array_splice($arr, 0, 3));
}


function maxTriSum($nums) {
   rsort($nums);
   return array_sum(array_slice(array_unique($nums), 0, 3));
}


function maxTriSum($nums) {
   $res = 0;
   $nums = array_unique($nums);
   rsort($nums);
   for ($i = 0; $i < 3; $i++) {
      $res += $nums[$i];
   }
   return $res;
}


print_r(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]) . ' ' . 32 . '
');
print_r(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]) . ' ' . 18 . '
');
print_r(maxTriSum([-3, -27, -4, -2, -27, -2]) . ' ' . -9 . '
');