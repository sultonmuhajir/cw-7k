<?php
/*
|--------------------------------------------------------------------------
| Cats and shelves
|--------------------------------------------------------------------------
|
*/

function cats(int $start, int $finish): int {
   $diff = $finish - $start;
   return floor($diff / 3) + ($diff % 3);
}


function cats($s,$f) {
   return intdiv($f-$s,3)+($f-$s)%3;
}


function cats(int $start, int $finish): int {
   $count =0 ;
   $diff = $finish - $start;
   while($diff>0) {
      if($diff == 1 || $diff == 2) {
         $diff -= 1;
      } else if ($diff >= 3) {
         $diff -= 3;
      }
      $count++;
   }
   return $count;
}


print_r(cats(1,5) . ' ' . 2 . '
');
print_r(cats(2,4) . ' ' . 2 . '
');