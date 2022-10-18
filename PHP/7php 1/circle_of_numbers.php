<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #2: Circle of Numbers
|--------------------------------------------------------------------------
|
*/

function circle_of_numbers($n, $first_number) {
   return ($first_number + $n / 2) % $n;
}


function circle_of_numbers(int $n, int $first_number): int {
   return ($first_number >= $n/2 ) ? $first_number - $n/2  : $first_number + $n/2;
}


function circle_of_numbers(int $n, int $first_number): int {
   return $n/2 + $first_number >= $n ? $first_number - $n/2 : $n/2 + $first_number;
}


print_r(circle_of_numbers(10, 2) . ' ' . 7 . '
');
print_r(circle_of_numbers(10, 7) . ' ' . 2 . '
');
print_r(circle_of_numbers(4, 1) . ' ' . 3 . '
');
print_r(circle_of_numbers(6, 3) . ' ' . 0 . '
');