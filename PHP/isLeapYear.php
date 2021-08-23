<?php
/*
|--------------------------------------------------------------------------
| Leap Years
|--------------------------------------------------------------------------
|
*/

function isLeapYear($year) {
   return !(($year % 400) * (!($year % 100)) + $year % 4);
}


function isLeapYear(int $year): bool {
   return (bool) date('L', strtotime("$year-01-01"));
}


function isLeapYear($year) {
   if ($year % 4 != 0) return false;
   if ($year % 400 == 0) return true;
   return $year % 100 != 0;
}


function isLeapYear($year) {
   return date('L', strtotime("$year-01-01")) == 1;
}


print_r(isLeapYear(1234). ' ' . false . '
');
print_r(isLeapYear(1984). ' ' . true . '
');
print_r(isLeapYear(2000). ' ' . true . '
');
print_r(isLeapYear(2010). ' ' . false . '
');
print_r(isLeapYear(2013). ' ' . false . '
');
print_r(isLeapYear(1000). ' ' . false . '
');
print_r(isLeapYear(1800). ' ' . false . '
');