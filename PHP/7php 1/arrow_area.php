<?php
/*
|--------------------------------------------------------------------------
| Area of an arrow
|--------------------------------------------------------------------------
|
*/

function arrow_area(int $a, int $b): float {
   return ($a/2) * ($b/2);
}


function arrow_area(int $a, int $b): float {
   return 0.25*$a*$b;
}


function arrow_area($a, $b) {
   return $a * $b / 4;
}


function arrow_area(float $a, float $b): float {
   return $a * $b/2 * 0.5;
}


print_r(arrow_area(4, 2) . ' ' . 2 . '
');
print_r(arrow_area(7, 6) . ' ' . 10.5 . '
');
print_r(arrow_area(25, 25) . ' ' . 156.25 . '
');