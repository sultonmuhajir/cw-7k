<?php
/*
|--------------------------------------------------------------------------
| Target Date
|--------------------------------------------------------------------------
|
*/

function dateNbDays($a0, $a, $p) {
   $d = ceil(log($a / $a0, 1 + $p / 36000));
   return date("Y-m-d", strtotime("1.01.2016 +$d days"));
}


function dateNbDays($a0, $a, $p) {
   $d = 0;
   while($a0 < $a){
      $a0 += $a0 * $p / 36000;
      $d++;
   }
   return date('Y-m-d', strtotime("2016-01-01 +$d days"));
}


function dateNbDays($a0, $a, $p) {
   for ($day = 0; $a0 < $a; $day++) {
      $a0 += $p / 36000 * $a0;
   }
   $date = new DateTime('2016-01-01');
   $date->add(new DateInterval("P{$day}D"));
   return $date->format('Y-m-d');
}


print_r(dateNbDays(4281, 5087, 2) . " 2024-07-03
");
print_r(dateNbDays(4620, 5188, 2) . " 2021-09-19
");
print_r(dateNbDays(9999, 11427, 6) . " 2018-03-13
");
print_r(dateNbDays(3525, 4822, 3) . " 2026-04-18
");