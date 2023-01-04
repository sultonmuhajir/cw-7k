<?php
/*
|--------------------------------------------------------------------------
| Minimize Sum Of Array (Array Series #1)
|--------------------------------------------------------------------------
|
*/

function minSum($arr) {
   $res = 0;
   sort($arr);
   for ($i=0; $i < count($arr)/2; $i++) { 
      $res += $arr[$i] * $arr[count($arr) - ($i+1)];
   }
   return $res;
}


function minSum($arr) {
   sort($arr);
   while(count($arr)) {
      $sum[] = array_pop($arr) * array_shift($arr);
   }
   return array_sum($sum);
}


function minSum($arr) {
   sort($arr);
   $temp = [];
   while (count($arr) > 1) {
      $temp[] = array_shift($arr)*array_pop($arr);
   }
   return array_sum($temp);
}


function minSum($arr) {
   $result = 0;
   sort($arr);
   while (!empty($arr)) {
      $result += $arr[0] * end($arr);
      $arr = array_slice($arr, 1, count($arr) - 2);
   }
   return $result;
}


print_r(minSum([5, 4, 2, 3]) . ' ' . 22 . '
');
print_r(minSum([12, 6, 10, 26, 3, 24]) . ' ' . 342 . '
');
print_r(minSum([9, 2, 8, 7, 5, 4, 0, 6]) . ' ' . 74) . '
'; 