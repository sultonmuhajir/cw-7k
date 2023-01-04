<?php
/*
|--------------------------------------------------------------------------
| The fusc function -- Part 1
|--------------------------------------------------------------------------
|
*/

function fusc($n) {
   return $n < 2 ? $n : ($n % 2 == 0 ? fusc($n/2) : fusc(($n-1)/2) + fusc(($n+1)/2));
}


function fusc(int $n): int {
   if ( $n == 0 ) return 0;
   if ( $n == 1 ) return 1;
   if ( $n % 2 == 0) return fusc($n / 2);
   return fusc( ($n-1)/2 ) + fusc( ($n+1)/2 );
}


function fusc(int $n): int {
   $f = [0, 1];
   foreach(range(2, $n) as $i)    
      $f[$i] = $f[floor($i/2)] + ($i%2 ? $f[floor($i/2)+1] : 0);
   return $f[$n];
}


print_r(fusc(0) . ' ' . 0 . '
');
print_r(fusc(1) . ' ' . 1 . '
');
print_r(fusc(85) . ' ' . 21 . '
');