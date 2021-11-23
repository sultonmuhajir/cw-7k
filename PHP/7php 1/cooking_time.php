<?php
/*
|--------------------------------------------------------------------------
| Boiled Eggs
|--------------------------------------------------------------------------
|
*/

function cooking_time(int $eggs): int {
   return ceil($eggs / 8) * 5;
}


function cooking_time($e) {
   return ($e + 7 >> 3) * 5;
}


function cooking_time( int $eggs ) : int {
   for ( $i = $g = 0; $i < $eggs ; $i+=8, $g+=5 ); 
      return $g;
}


function cooking_time(int $eggs, int $n = 0): int {
   return $eggs > 0 ? cooking_time($eggs - 8, $n + 5) : $n;
}


print_r(cooking_time(0) . ' ' . 0 . '
');
print_r(cooking_time(5) . ' ' . 5 . '
');
print_r(cooking_time(10) . ' ' . 10 . '
');