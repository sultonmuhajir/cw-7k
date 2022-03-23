<?php
/*
|--------------------------------------------------------------------------
| Halving Sum
|--------------------------------------------------------------------------
|
*/

function halvingSum($n) {
   $res = $n;
   while (floor($n / 2) > 0) {
      $res += floor($n / 2);
      $n = floor($n / 2);
   }
   return intval($res);
}


function halvingSum($n) {
   return $n ? intVal($n + halvingSum(floor($n/2))) : 0;
}


function halvingSum($n) {
   $arr = [];
   for ($i = 2; $i<=$n; $i=$i+$i){
      $arr[] = (int)($n/$i);
   }
   return array_sum($arr)+$n;   
}


function halvingSum($n, $sum = 1) {
   return $n == 1 ? (int)$sum : halvingSum(floor($n/2), $sum + $n);
}


print_r(halvingSum(25). ' ' . 47 . '
');
print_r(halvingSum(127). ' ' . 247 . '
');