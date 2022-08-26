<?php
/*
|--------------------------------------------------------------------------
| Product of Array Items
|--------------------------------------------------------------------------
|
*/

function product($a) {
   return $a == NULL || count($a) == 0 ? NULL : array_product($a);
}


function product($a) {
   return empty($a) ? NULL : array_product($a);
}


function product($a) {
   return $a ? array_product($a) : NULL;
}


print_r(product([5, 4, 1, 3, 9]) . ' ' . 540 . '
');
print_r(product([-2, 6, 7, 8]) . ' ' . -672 . '
');
print_r(product([10]) . ' ' . 10 . '
');
print_r(product([0, 2, 9, 7]) . ' ' . 0 . '
');
print_r(product(NULL));
print_r(product([]));