<?php
/*
|--------------------------------------------------------------------------
| PHP Functions - Splat Operator
|--------------------------------------------------------------------------
|
*/

function sum_all(...$x) {
   return array_sum($x);
}
function ultimate_product(...$x) {
   return array_product($x);
}
function scale_sum(...$x) {
   return $x[0] * array_sum(array_splice($x, 1, count($x)-1));
}


function sum_all() {
   return array_sum(func_get_args());
}
function ultimate_product() {
   return array_product(func_get_args());
}
function scale_sum($arg1, ...$args) {
   return $arg1 * array_sum($args);
}


print_r(sum_all(1, 2, 3, 4, 5) . ' ' . 15 . '
');
print_r(ultimate_product(54, 23, 45, 67, 98) . ' ' . 366973740 . '
');
print_r(scale_sum(5, 2, 3, 4, 5) . ' ' . 70 . '
');