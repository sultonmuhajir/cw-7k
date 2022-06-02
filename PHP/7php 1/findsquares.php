<?php
/*
|--------------------------------------------------------------------------
| Find the Squares
|--------------------------------------------------------------------------
|
*/

function findsquares($num){
   return ceil($num/2)**2 . '-' . floor($num/2)**2;
}


function findsquares(int $num) : string {
   return (($num+1)/2)**2 . '-'. (($num-1)/2)**2;
}


function findsquares($n) {
   return ($n/2+.5)**2 . '-' . ($n/2-.5)**2;
}


print_r(findsquares(9) . ' 25-16
');
print_r(findsquares(5) . ' 9-4
');
print_r(findsquares(81) . ' 1681-1600
');
print_r(findsquares(25) . ' 169-144
');