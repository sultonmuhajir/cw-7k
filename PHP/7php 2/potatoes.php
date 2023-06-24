<?php
/*
|--------------------------------------------------------------------------
| Drying Potatoes
|--------------------------------------------------------------------------
|
*/

function potatoes($p0, $w0, $p1) {
   return ((($p0 - 100) / ($p1 - 100)) * $w0) | 0;
}


function potatoes($p0, $w0, $p1): int {
   return (int) $w0 * (100 - $p0) / (100 - $p1);
}


function potatoes($p0, $w0, $p1): int {
   return $w0 * (100 - $p0) / (100 - $p1);
}


print_r(potatoes(82, 127, 80) . ' ' . 114 . '
');
print_r(potatoes(93, 129, 91) . ' ' . 100 . '
');