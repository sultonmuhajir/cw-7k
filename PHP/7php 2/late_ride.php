<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #3: Late Ride
|--------------------------------------------------------------------------
|
*/

function late_ride(int $n) {
   return array_sum(array_merge(str_split(strval(floor($n/60))) , str_split(strval($n%60))));
}


function late_ride(int $n): int {
   return array_sum(str_split(date("is", $n)));
}


function late_ride(int $n): int {
   return array_sum(str_split(floor($n/60) . $n%60));
}


print_r(late_ride(240) . ' ' . 4 . '
');
print_r(late_ride(808) . ' ' . 14 . '
');
print_r(late_ride(1439) . ' ' . 19 . '
');