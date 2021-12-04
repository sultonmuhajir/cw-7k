<?php
/*
|--------------------------------------------------------------------------
| Driving School Series #2
|--------------------------------------------------------------------------
|
*/

function cost($mins) {
   return ceil(max(0, $mins - 65) / 30 + 3) * 10;
}


function cost(int $mins) : int {
   return 30 + 10 * ceil(max(0, $mins - 60 - 5) / 30);
}


function cost($mins){
   return $mins <= 65 ? 30 : 30 + 10 * ceil(($mins - 65) / 30);
}


function cost($mins) {
   $sum = 30;
   $period = 65;
   while ($period < $mins) {
      $sum += 10;
      $period += 30;
   }
   return $sum;
 }


print_r(cost(45) . ' ' . 30 . '
');
print_r(cost(63) . ' ' . 30 . '
');
print_r(cost(84) . ' ' . 40 . '
');
print_r(cost(102) . ' ' . 50 . '
');
print_r(cost(273) . ' ' . 100 . '
');