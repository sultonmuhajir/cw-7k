<?php
/*
|--------------------------------------------------------------------------
| Barista problem
|--------------------------------------------------------------------------
|
*/

function barista($coffees) {
   sort($coffees);
   $res = 0;
   foreach ($coffees as $i => $el) {
      $res += $el * (count($coffees) - $i) + 2 * $i;
   }
   return $res;
}


function barista($coffees) {
   rsort($coffees);
   $cnt = count($coffees);
   return array_sum(array_map(fn($a, $b) => $a * $b, $coffees, range(1, $cnt))) + ($cnt**2 - $cnt);
}


function barista($coffees){
   sort($coffees);
   for ($i = 1; $i < count($coffees); $i++) {
      $coffees[$i] = $coffees[$i] + $coffees[$i - 1] + 2;
   }
   return array_sum($coffees);  
}


print_r(barista([2, 10, 5, 3, 9]) . ' ' . 85 . '
');
print_r(barista([4, 3, 2]) . ' ' . 22 . '
');
print_r(barista([20, 5]) . ' ' . 32 . '
');
print_r(barista([20, 5, 4, 3, 1, 5, 7, 8]) . ' ' . 211 . '
');
print_r(barista([5, 4, 3, 2, 1]) . ' ' . 55 . '
');