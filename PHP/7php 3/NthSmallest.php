<?php
/*
|--------------------------------------------------------------------------
| Nth Smallest Element (Array Series #4)
|--------------------------------------------------------------------------
|
*/

function NthSmallest($arr, $pos) {
   sort($arr);
   return $arr[$pos-1];
}


function NthSmallest($arr, $pos) {
   rsort($arr);
   for($i = $pos; $i > 1; $i--){
      array_pop($arr);
   }
   return min($arr);
}


function NthSmallest($arr, $pos) {
   sort($arr);
   for ($i = 1; $i < $pos; $i++) {
      array_shift($arr);
   }
   return $arr[0];
}


function NthSmallest($arr, $pos) {
   for ($i = 1; $i < $pos; $i++) {
      unset($arr[array_search(min($arr), $arr)]);
   }
   return min($arr);
}


print_r(NthSmallest([3, 1, 2], 2) . ' ' . 2 . '
');
print_r(NthSmallest([15, 20, 7, 10, 4, 3], 3) . ' ' . 7 . '
');
print_r(NthSmallest([-5, -1, -6, -18], 4) . ' ' . -1 . '
');
print_r(NthSmallest([-102, -16, -1, -2, -367, -9], 5) . ' ' . -2 . '
');
print_r(NthSmallest([2, 169, 13, -5, 0, -1], 4) . ' ' . 2 . '
');