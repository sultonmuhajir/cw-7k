<?php
/*
|--------------------------------------------------------------------------
| Find twins
|--------------------------------------------------------------------------
|
*/

function elimination($arr) {
   $res = 0;
   $x = array_count_values($arr);
   foreach ($x as $i => $v) {
      $res += $v > 1 ? $i : 0;
   }
   return $res != 0 ? $res : null;
}


function elimination($arr) {
   return array_search(2, array_count_values($arr));    
}


function elimination($arr){
   return empty($repeat = array_diff_key($arr, array_unique($arr))) ? null : array_shift($repeat);
}


function elimination($arr){
   return array_flip(array_count_values($arr))[2];
}


print_r(elimination([2, 5, 34, 1, 22, 1]));
print_r(elimination([2, 2, 34, 1, 22]));
print_r(elimination([2, 5, 34, 1, 22]));