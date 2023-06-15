<?php
/*
|--------------------------------------------------------------------------
| The Poet And The Pendulum
|--------------------------------------------------------------------------
|
*/

function pendulum($values) {
   $arr1 = $arr2 = [];
   sort($values);
   foreach ($values as $i => $x) {
      if ($i % 2)$arr = &$arr2;
      else $arr = &$arr1;
      array_push($arr, $x);
   }
   return array_merge(array_reverse($arr1), $arr2);
}


function pendulum($values) {
   $res = [];
   sort($values);
   foreach($values as $k => $v){
      $k & 1 ? array_push($res, $v) : array_unshift($res, $v);
   }
   return $res;
}


function pendulum($values) {
   sort($values);
   $pendulum = [];
   foreach ($values as $k => $v) {
      ['array_unshift', 'array_push'][$k % 2]($pendulum, $v);
   }
   return $pendulum;
}


print_r(pendulum([4, 10, 9]));
print_r(pendulum([27, 27, 19, 21, 22, 28, 24]));
print_r(pendulum([-9, -2, -10, -6]));