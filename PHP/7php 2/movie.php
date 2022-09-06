<?php
/*
|--------------------------------------------------------------------------
| Going to the cinema
|--------------------------------------------------------------------------
|
*/

function movie($card, $ticket, $perc) {
   $res = 0;
   while ($ticket * $res <= ceil($card)) {
      $res += 1;
      $card += $ticket * $perc ** $res;
   }
   return $res;
}


function movie($card, $ticket, $perc) {
   for ($i = 0; $ticket * $i <= ceil($card); $i++) {
      $card += $ticket * ($perc ** $i);
   }
   return $i - 1;
}


function movie($card, $ticket, $perc) {
   $res = 0;
   do {
      $res++;
      $card += $ticket * ($perc ** $res);
   } while (ceil($card) >= ($ticket * $res));   
   return $res;
}


print_r(movie(500, 15, 0.9) . ' ' . 43 . '
');
print_r(movie(100, 10, 0.95) . ' ' . 24 . '
');