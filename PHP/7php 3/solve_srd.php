<?php
/*
|--------------------------------------------------------------------------
| Simple remove duplicates
|--------------------------------------------------------------------------
|
*/

function solve($arr) {
   return array_reverse(array_unique(array_reverse($arr)));
}


function solve($arr) {
   $res = [];
   foreach ($arr as $k => $v) {    
      if (!in_array($v, array_slice($arr,$k+1))) $res[] = $v;
   }
   return $res;
}


function solve($arr) {
   $arr = array_flip(array_flip($arr));
   ksort($arr);
   return array_values($arr);
}


print_r(solve([3, 4, 4, 3, 6, 3]));
print_r(solve([1, 2, 1, 2, 1, 2, 3]));