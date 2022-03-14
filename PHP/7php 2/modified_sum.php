<?php
/*
|--------------------------------------------------------------------------
| Nth power rules them all!
|--------------------------------------------------------------------------
|
*/

function modified_sum(array $a, int $n): int {
   return array_sum(array_map(fn($i) => $i ** $n, $a)) - array_sum($a);
}


function modified_sum(array $a, int $n): int {
   return array_reduce($a, function ($s, $c) use ($n) {return $s + $c ** $n - $c;});
}


function modified_sum(array $a, int $n): int {
   $res = 0;
   foreach($a as $i) 
      $res += pow($i, $n) - $i;
   return $res;
}


print_r(modified_sum([1, 2, 3], 3) . ' ' . 30 . '
');
print_r(modified_sum([1, 2], 5) . ' ' . 30 . '
');