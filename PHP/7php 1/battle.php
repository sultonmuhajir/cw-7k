<?php
/*
|--------------------------------------------------------------------------
| Battle of the characters (Easy)
|--------------------------------------------------------------------------
|
*/

function battle($x, $y) {
   $num_x = array_sum(array_map(fn($i) => ord($i)-64, str_split($x)));
   $num_y = array_sum(array_map(fn($i) => ord($i)-64, str_split($y)));
   return $num_x > $num_y ? $x : ($num_x < $num_y ? $y : "Tie!");
}


function battle(string $r, string $s): string {
   return ($x = array_reduce(str_split($r), $f = function ($s, $c) {
      return $s + (preg_match('/[A-Z]/', $c) ? ord($c) - 64 : 0);
   })) > ($y = array_reduce(str_split($s), $f)) ? $r : ($x < $y ? $s : "Tie!");
}


function battle($x, $y) {
   list($a, $b) = array_map(function ($e) {
      return array_sum(array_map(function ($v) {
         return ord($v) - 64;
      }, str_split($e)));
   }, [$x, $y]);
   return $a > $b ? $x : ($a < $b ? $y : "Tie!");
}


print_r(battle("AAA", "Z") . " Z
");
print_r(battle("ONE", "TWO") . " TWO
");
print_r(battle("ONE", "NEO") . " Tie!
");
print_r(battle("FOUR", "FIVE") . " FOUR
");