<?php
/*
|--------------------------------------------------------------------------
| Odd Ones Out!
|--------------------------------------------------------------------------
|
*/

function odd_ones_out($arr) {
   return array_values(array_filter($arr, function($x) use ($arr) {
      return count(array_filter($arr, function($y) use ($x) {
         return $y == $x;
      })) % 2 == 0;
   }));
}


function odd_ones_out($a) {
   $res = [];
   $temp = array_count_values($a);
   foreach($a as $value) {
      if($temp[$value] % 2 == 0) $res[] = $value;
   }
   return $res;
}


function odd_ones_out($arr) {
   $count = array_count_values($arr);
   return array_values(array_filter($arr, function($n) use($count){
      return $count[$n] % 2 == 0;
   }));
}


print_r(odd_ones_out([1, 2, 3, 1, 3, 3]));
print_r(odd_ones_out([75, 68, 75, 47, 68]));
print_r(odd_ones_out([42, 72, 32, 4, 94, 82, 67, 67]));