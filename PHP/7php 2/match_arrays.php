<?php
/*
|--------------------------------------------------------------------------
| Array comparator
|--------------------------------------------------------------------------
|
*/

function match_arrays(array $a, array $b): int {
   $res = 0;
   foreach ($a as $x) {
      foreach ($b as $y) {
         if ($x === $y) $res++;
      }
   }
   return $res;
}


function match_arrays(array $a, array $b): int {
   return count(array_intersect($a, $b));
}


function match_arrays(array $a, array $b): int {
   return count($a) - count(array_diff($a, $b));
}


print_r(match_arrays(['Perl','Closure','JavaScript'],['Go', 'C++','Erlang']) . ' ' . 0 . '
');
print_r(match_arrays(['Erlang','JavaScript'],['Go', 'C++','Python']) . ' ' . 0 . '
');
print_r(match_arrays([True,3,9,11,15],[True,3,11]) . ' ' . 3 . '
');