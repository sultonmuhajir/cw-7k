<?php
/*
|--------------------------------------------------------------------------
| Gauß needs help! (Sums of a lot of numbers).
|--------------------------------------------------------------------------
|
*/

function f($n = false) {
   return gettype($n) != 'integer' || $n % 1 != 0 || $n <= 0 ? false : (($n + 1) * $n) / 2;
}


function f($n = false) {
   $res = 0;
   if (gettype($n) == 'integer' && $n % 1 == 0 && $n > 0) {
      for ($i = 1; $i <= $n; $i++) {
         $res += $i;
      }
      return $res;
   } else {
      return false;
   }
}


function f($n = 0) {
   return is_int($n) && $n > 0 ? $n * ($n + 1) / 2 : false;
}


function f($n = false) {
   return (is_int($n) && $n >= 1)?array_sum(range(1, $n)):false;
}


print_r(f(100) . ' ' . 5050 . '
');
print_r(f('we'));
print_r(f());