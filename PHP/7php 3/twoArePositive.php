<?php
/*
|--------------------------------------------------------------------------
| Two numbers are positive
|--------------------------------------------------------------------------
|
*/

function twoArePositive(...$arr) {
   return count(array_filter($arr, fn($i) => $i > 0)) == 2;
}


function twoArePositive(int $a, int $b, int $c): bool {
   return ($a > 0) + ($b > 0) + ($c > 0) === 2;
}


function twoArePositive(int $a, int $b, int $c): bool {
   return count(array_filter([$a,$b,$c],fn($n)=>$n>0))==2;
}


print_r(twoArePositive(2, 4, -3) . ' ' . true . '
');
print_r(twoArePositive(-4, 6, 8) . ' ' . true . '
');
print_r(twoArePositive(4, -6, 9) . ' ' . true . '
');
print_r(twoArePositive(-4, 6, 0) . ' ' . false . '
');
print_r(twoArePositive(4, 6, 10) . ' ' . false . '
');
print_r(twoArePositive(-14, -3, -4) . ' ' . false . '
');