<?php
/*
|--------------------------------------------------------------------------
| Hero's root
|--------------------------------------------------------------------------
|
*/

function intRac($n, $guess, $count = 1) {
   $x = intval(($guess + $n / $guess) / 2);
   return (abs($guess - $x) < 1) ? $count : intRac($n, $x, $count + 1);
}


function intRac($n, $guess) {
   $ans = floor(sqrt($n));
   $i = 1;
   while($ans != $guess){
      $guess = intdiv($guess + intdiv($n, $guess), 2);
      $i++;
   }
   return $i;
}


function intRac($n, $guess) {
   $c = 0;
   do {
      $prev_guess=$guess;
      $guess=floor((($guess + ($n/$guess))/2));
      $c++;
   } while(abs($guess - $prev_guess) >= 1);
   return $c;
}


print_r(intRac(25, 1) . ' ' . 4 . '
');
print_r(intRac(125348, 300) . ' ' . 3 . '
');