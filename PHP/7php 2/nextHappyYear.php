<?php
/*
|--------------------------------------------------------------------------
| See You Next Happy Year
|--------------------------------------------------------------------------
|
*/

function nextHappyYear($year) {
   return count(count_chars($year+1, 1)) == 4 ? $year+1 : nextHappyYear($year+1);
}


function nextHappyYear($year) {
   do $year += 1;
   while (max(count_chars($year, 1)) > 1);
   return $year;
}


function nextHappyYear($year) {
   return count(array_unique(str_split($year+1))) == 4 ? $year+1 : nextHappyYear($year+1);
}


print_r(nextHappyYear(1001) . ' ' . 1023 . '
');
print_r(nextHappyYear(1123) . ' ' . 1203 . '
');
print_r(nextHappyYear(2001) . ' ' . 2013 . '
');
print_r(nextHappyYear(2334) . ' ' . 2340 . '
');