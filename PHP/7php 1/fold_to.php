<?php
/*
|--------------------------------------------------------------------------
| Folding your way to the moon
|--------------------------------------------------------------------------
|
*/

function fold_to($distance) {
   $m = 0.0001; $res = 0;
   while ($m < $distance) {
      $m *= 2; $res++;
   }
   return $distance >= 0 ? $res : null;
}


function fold_to($n) {
   return $n > 0 ? max(0, ceil(log(1e4 * $n, 2))) : NULL;
}


function fold_to($distance, $tkness = 0.0001, $folds = 0) {
   return ($tkness > $distance) ? $folds : fold_to($distance, $tkness * 2, $folds + 1);
}


function fold_to($distance) {
   $res = 0;
   for ($i = 0.0001; $i < $distance; $i *= 2) $res++;
   return $res;
}


print_r(fold_to(384000000) . ' ' . 42);