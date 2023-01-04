<?php
/*
|--------------------------------------------------------------------------
| Row Weights
|--------------------------------------------------------------------------
|
*/

function rowWeights($arr) {
   $res = [0, 0];
   for ($i = 0; $i < count($arr); $i++) {
      $i % 2 == 0 ? ($res[0] += $arr[$i]) : ($res[1] += $arr[$i]);
   }
   return $res;
}


function rowWeights($arr) {
   $r = [0, 0];
   foreach ($arr as $k => $v) $r[$k % 2 != 0] += $v;
   return $r;
}


function rowWeights($arr) {
   return [
      array_sum(array_filter($arr, function ($v){ return !($v%2); }, ARRAY_FILTER_USE_KEY)),
      array_sum(array_filter($arr, function ($v){ return $v%2; }, ARRAY_FILTER_USE_KEY))
   ];
}


print_r(rowWeights([80]));
print_r(rowWeights([100, 50]));
print_r(rowWeights([50, 60, 70, 80]));
print_r(rowWeights([13, 27, 49]));