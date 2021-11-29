<?php
/*
|--------------------------------------------------------------------------
| Simple beads count
|--------------------------------------------------------------------------
|
*/

function count_red_beads(int $n): int {
   return $n < 2 ? 0 : ($n-1)*2;
}


function count_red_beads(int $n): int {
   $result = 0;
   for ($i = 0; $i < $n - 1; $i++) {
      $result += 2;
   }
   return $result;
}


function count_red_beads(int $n): int { 
   return max(0, $n - 1) * 2;
}


function count_red_beads(int $n): int {
   $res = 0;
   while ($n >= 2) {
      $res += 2;
      $n -= 1;
   }
   return $res;
}


print_r(count_red_beads(0) . ' ' . 0 . '
');
print_r(count_red_beads(1) . ' ' . 0 . '
');
print_r(count_red_beads(3) . ' ' . 4 . '
');
print_r(count_red_beads(5) . ' ' . 8 . '
');