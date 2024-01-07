<?php
/*
|--------------------------------------------------------------------------
| If you can't beat 'em, join 'em!
|--------------------------------------------------------------------------
|
*/

function cantBeatSoJoin($nums) {
   usort($nums, fn($a, $b) => array_sum($b) <=> array_sum($a));
   return array_merge(...$nums);
}


function cantBeatSoJoin($n) {
   $r = $s = [];
   foreach($n as $k => $v) {
      $s[$k] = array_sum($v);
   }
   arsort($s);
   foreach($s as $k => $v) {
      foreach($n[$k] as $p) {
         $r[] = $p;
      }
   }
   return $r;
}


function cantBeatSoJoin($nums) {
   usort($nums, function($a, $b) { return array_sum($a) < array_sum($b); });
   return array_merge(...$nums);
}


print_r(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));