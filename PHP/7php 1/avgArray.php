<?php
/*
|--------------------------------------------------------------------------
| Average Array
|--------------------------------------------------------------------------
|
*/

function avgArray($arr) {
   $res = [];
   for ($i = 0; $i < count($arr[0]); $i++) {
      $total = 0;
      for ($j = 0; $j < count($arr); $j++) $total += $arr[$j][$i];
      array_push($res, $total / count($arr));
   }
   return $res;
}


function avgArray($arr) {
   return array_map(function ($e) {
      return array_sum($e) / count($e);
   }, array_map(null, ...$arr));
}


function avgArray($arr) {
   $cnt = count($arr);
   foreach($arr[0] as $k => $v){
      @$res[] = array_sum(array_column($arr, $k))/$cnt;
   }
   return $res;
}


print(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]));
print(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]));
print(avgArray([[2, 5, 4, 3, 19], [2, 5, 6, 7, 10]]));
print(avgArray([[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]));