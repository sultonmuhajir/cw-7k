<?php
/*
|--------------------------------------------------------------------------
| Looking for a benefactor
|--------------------------------------------------------------------------
|
*/

function newAvg($arr, $newavg) {
   $res = ceil(((count($arr) + 1) * $newavg) - array_sum($arr));
   if ($res < 0) throw new InvalidArgumentException();
   return $res;
}


function newAvg($arr, $newavg) {
   return max(0, ceil($newavg * (count($arr) + 1) - array_sum($arr))) ?: (function(){
      throw new InvalidArgumentException();
   })();
}


function newAvg($arr, $newavg) {
   $res = ($newavg*(count($arr)+1))-array_sum($arr);
   if ($res<0) {
      throw new InvalidArgumentException();
   } else {
      return ceil($res);
   }
}


print_r(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628);
print_r(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645);