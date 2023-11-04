<?php
/*
|--------------------------------------------------------------------------
| Find the area of the rectangle!
|--------------------------------------------------------------------------
|
*/

function area($d, $l) {
   return $d > $l ? round(sqrt($d ** 2 - $l ** 2) * $l, 2) : "Not a rectangle";
}


function area($d, $l) {
   return ($d<=$l) ? 'Not a rectangle' : round($l*sqrt($d*$d-$l*$l),2);
}


function area($d, $l) {
   return $l >= $d ? 'Not a rectangle' : round(($d**2-$l**2)**0.5*$l, 2);
}


print_r(area(5, 4) . ' ' . 12 . '
');
print_r(area(10, 6) . ' ' . 48 . '
');
print_r(area(13, 5) . ' ' . 60 . '
');
print_r(area(12, 5) . ' ' . 54.54 . '
');