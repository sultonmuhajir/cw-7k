<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #87: Shuffled Array
|--------------------------------------------------------------------------
|
*/

function shuffledArray($arr) {
   for ($i = 0; $i < count($arr); $i++) {
      $x = array_splice($arr, $i, 1);
      if (array_sum($arr) == $x[0]) {
         sort($arr);
         return $arr;
      }
      array_splice($arr, $i, 0, $x[0]);
   }
}


function shuffledArray($arr){
   array_splice($arr, array_search(array_sum($arr)/2, $arr), 1);
   sort($arr);
   return $arr;
}


function shuffledArray(array $arr) {
   foreach ($arr as $k => $v) {
      if ($v == array_sum($arr) - $v) {
         unset($arr[$k]);
         sort($arr);
         return $arr;
      }
   }
}


print_r(shuffledArray([1, 12, 3, 6, 2]));
print_r(shuffledArray([1, -3, -5, 7, 2]));
print_r(shuffledArray([2, -1, 2, 2, -1]));
print_r(shuffledArray([-3, -3]));