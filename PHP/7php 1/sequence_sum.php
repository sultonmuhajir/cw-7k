<?php
/*
|--------------------------------------------------------------------------
| Sum of a sequence
|--------------------------------------------------------------------------
|
*/

function sequence_sum($begin, $end, $step) {
   $res = 0;
   for ($i=$begin; $i <= $end; $i+=$step) { 
      $res += $i;
   }
   return $res;
}


function sequence_sum(int $begin, int $end, int $step): int {
   if ($begin > $end) return 0;
   $steps = floor(($end - $begin) / $step) + 1;
   return $steps * (($steps-1) * $step / 2 + $begin);
}


function sequence_sum($b,$e,$s) {
   return $b>=$e?0:($b+$s>$e?$b:array_sum(range($b,$e,$s)));
}


function sequence_sum(int $begin, int $end, int $step): int {
   $res = 0;
   while($begin <= $end) {
      $res += $begin;
      $begin += $step;
   }
   return $res;
}


function sequence_sum(int $begin, int $end, int $step): int {
   return ($begin <= $end) ? $begin + sequence_sum($begin + $step, $end, $step) : 0;
}


print_r(sequence_sum(2, 6, 2) . ' ' . 12 . ' 
');
print_r(sequence_sum(1, 5, 1) . ' ' . 15 . ' 
');
print_r(sequence_sum(1, 5, 3) . ' ' . 5 . ' 
');