<?php
/*
|--------------------------------------------------------------------------
| Rotate for a Max
|--------------------------------------------------------------------------
|
*/

function maxRot($n) {
   $res[] = $n;
   $res[] = intval(substr($res[0], 1).substr($res[0], 0, 1));
   for ($i = 1; $i < strlen($n) - 1; $i++)
      $res[] = intval(substr($res[$i], 0, $i) . substr($res[$i], $i + 1) . substr($res[$i], $i, 1));
   return max($res);
}


function maxRot(int $n) {
   $str = $n . '';
   $sequence = [$n];
   foreach (range(0, strlen($str) - 2) as $i) {
      $str = substr($str, 0, $i) . substr($str, $i + 1) . $str[$i];
      $sequence[] = +$str;
   }
   return max($sequence);
}


function maxRot($n) {
   return max(array_reduce(range(0, strlen($n)), function($r, $i) {
      $last = $r[0];
      $strNumber = substr($last, 0, $i) . substr($last, $i+1) . substr($last, $i, 1);
      array_unshift($r, intval($strNumber));
      return $r;
   }, [$n]));
}


print_r(maxRot(56789) . ' ' . 68957 . '
');
print_r(maxRot(896219342) . ' ' . 962193428 . '
');