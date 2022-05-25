<?php
/*
|--------------------------------------------------------------------------
| Breaking chocolate problem
|--------------------------------------------------------------------------
|
*/

function breakChocolate ($n, $m) {
   return max($n * $m - 1, 0);
}


function breakChocolate (int $n, int $m) :int {
   return $n * $m - 1;
}


function breakChocolate ($n, $m) {
   return ($n - 1) + ($m - 1) * $n;
}


print_r(breakChocolate(5, 5) . ' ' . 24 . '
');
print_r(breakChocolate(7, 4) . ' ' . 27 . '
');
print_r(breakChocolate(1, 1) . ' ' . 0 . '
');