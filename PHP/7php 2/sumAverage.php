<?php
/*
|--------------------------------------------------------------------------
| Sum of Array Averages
|--------------------------------------------------------------------------
|
*/

function sumAverage($arr) {
   $res = 0;
   foreach ($arr as $i) {
      $res += array_sum($i)/count($i);
   }
   return floor($res);
}


function sumAverage($arr) {
   return floor(array_sum(array_map(function($e) {
      return array_sum($e) / count($e);
   }, $arr)));
}


function sumAverage($arr) {
   return floor(array_reduce($arr, function ($sum, $a) {
      return $sum + (array_sum($a) / count($a));
   }, 0));
}


print_r(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]) . ' ' . 3 . '
');