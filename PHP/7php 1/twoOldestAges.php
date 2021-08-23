<?php
/*
|--------------------------------------------------------------------------
| Two Oldest Ages
|--------------------------------------------------------------------------
|
*/

function twoOldestAges($ages) {
   sort($ages);
   $desc = array_reverse($ages);
   return [$desc[1], $desc[0]];
}


function twoOldestAges($ages) {
   $res[1] = max($ages);
   unset($ages[array_search(max($ages), $ages)]);
   $res[0] = max($ages);
   return $res;
}


function twoOldestAges($ages) {
   rsort($ages);
   return [$ages[1], $ages[0]];
}


function twoOldestAges($ages) {
   rsort($ages, SORT_NUMERIC);
   $results[0] = $ages[1];
   $results[1] = $ages[0];
   return $results;
}


function twoOldestAges($ages) {
   sort($ages);
   return array_slice($ages, -2);
}


print_r(twoOldestAges([1, 5, 87, 45, 8, 8]));
print_r(twoOldestAges([6, 5, 83, 5, 3, 18]));


// [45, 87]
// [18, 83]