<?php
/*
|--------------------------------------------------------------------------
| Find all pairs
|--------------------------------------------------------------------------
|
*/

function duplicates($array): int {
   return array_sum(array_map(function($n) {
      return floor($n/2);
   }, array_count_values($array)));
}


function duplicates($array){
   $res = 0;
   foreach (array_count_values($array) as $count) {
      $res += intval($count / 2);
   }
   return $res;
}


function duplicates($array){
   return array_reduce(array_count_values($array), function($carry, $item){
      return $carry + floor($item / 2);
   }, 0);
}


print_r(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) . ' ' . 4 . '
');
print_r(duplicates([0, 0, 0, 0, 0, 0, 0]) . ' ' . 3 . '
');
print_r(duplicates([]) . ' ' . 0 . '
');