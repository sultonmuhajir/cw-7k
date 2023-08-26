<?php
/*
|--------------------------------------------------------------------------
| The wheat/rice and chessboard problem
|--------------------------------------------------------------------------
|
*/

function squaresNeeded($grains) {
   return $grains ? strlen(decbin($grains)) : 0;
}


function squaresNeeded($grains) {
   return ceil(log($grains + 1, 2));
}


function squaresNeeded($grains) { 
   return $grains < 1 ? 0 : 1 + squaresNeeded(floor($grains / 2)); 
}


print_r(squaresNeeded(0) . ' ' . 0 . '
');
print_r(squaresNeeded(1) . ' ' . 1 . '
');
print_r(squaresNeeded(2) . ' ' . 2 . '
');
print_r(squaresNeeded(3) . ' ' . 2 . '
');
print_r(squaresNeeded(4) . ' ' . 3 . '
');