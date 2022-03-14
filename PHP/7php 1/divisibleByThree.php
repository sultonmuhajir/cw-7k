<?php
/*
|--------------------------------------------------------------------------
| By 3, or not by 3? That is the question . . .
|--------------------------------------------------------------------------
|
*/

function divisibleByThree($str) {
   return array_reduce(str_split($str), function($a, $b) {return + $a + $b;}, 0) % 3 == 0;
}


function divisibleByThree($str): bool {
   return !(array_sum(str_split($str)) % 3);
}


function divisibleByThree($str) {
   return array_sum(str_split($str)) % 3 === 0;
}


print_r(divisibleByThree('123') . ' ' . true . '
');
print_r(divisibleByThree('19254') . ' ' . true . '
');
print_r(divisibleByThree('88') . ' ' . false . '
');
print_r(divisibleByThree('33333333') . ' ' . true . '
');