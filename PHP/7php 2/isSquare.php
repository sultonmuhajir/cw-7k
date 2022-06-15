<?php
/*
|--------------------------------------------------------------------------
| You're a square!
|--------------------------------------------------------------------------
|
*/

function isSquare($n) {
   return !fmod(sqrt($n), 1);
}


function isSquare($n){
   return sqrt($n) === floor(sqrt($n));
}


function isSquare($n){
   return ctype_digit(strval(sqrt($n)));
}


print_r(isSquare(-1) . ' ' . false . '
');
print_r(isSquare(0) . ' ' . true . '
');
print_r(isSquare(3) . ' ' . false . '
');