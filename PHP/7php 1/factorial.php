<?php
/*
|--------------------------------------------------------------------------
| Factorial
|--------------------------------------------------------------------------
|
*/

function factorial(int $n) {
   if ($n < 0 || $n > 12) throw new RangeException();
   return $n ? $n * factorial($n - 1) : 1;
}


function factorial(int $n): int {
   if($n < 0 || $n > 12) throw new RangeException;
   return $n ? array_product(range(1, $n)) : 1;
}


function factorial(int $n): int {
   if ($n < 0 || $n > 12) {
     throw new \RangeException;
   }
   $res = 1;
   for ($i = 1; $i <= $n; $i += 1) $res *= $i;
   return $res;
}


print_r(factorial(0) . ' ' . 1 . '
');
print_r(factorial(1) . ' ' . 1 . '
');
print_r(factorial(2) . ' ' . 2 . '
');
print_r(factorial(3) . ' ' . 6 . '
');