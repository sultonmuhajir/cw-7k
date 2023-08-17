<?php
/*
|--------------------------------------------------------------------------
| Thinking & Testing: A and B?
|--------------------------------------------------------------------------
|
*/

function testit($a, $b) {
   return $a | $b;
}


function testit($a, $b) {
   return $a + $b - ($a & $b);
}


function testit($a, $b) {
   return ($a ^ $b) | ($a & $b);
}


print_r(testit(0, 1) . ' ' . 1 . '
');
print_r(testit(1, 2) . ' ' . 3 . '
');
print_r(testit(10, 20) . ' ' . 30 . '
');
print_r(testit(1, 1) . ' ' . 1 . '
');
print_r(testit(1, 3) . ' ' . 3 . '
');