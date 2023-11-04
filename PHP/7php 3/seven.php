<?php
/*
|--------------------------------------------------------------------------
| A Rule of Divisibility by 7
|--------------------------------------------------------------------------
|
*/

function seven($m) {
   $n = 0;
   while ($m > 99) {
      $m = floor($m / 10) - 2 * ($m % 10);
      $n++;
   }
   return [$m, $n];
}


function seven($m, $i = 0) {
   return ($m < 100) ? [$m, $i] : seven((floor($m / 10)) - (2 * ($m % 10 )), $i + 1);
}


function seven(int $m): array {
  $steps = 0;
   while ($m > 99 && ++$steps) {
      $m = intdiv($m, 10) - 2 * ($m % 10);
   }
  return [$m, $steps];
}


print_r(seven(1021));
print_r(seven(1603));
print_r(seven(371));
print_r(seven(483));