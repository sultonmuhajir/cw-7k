<?php
/*
|--------------------------------------------------------------------------
| Simple consecutive pairs
|--------------------------------------------------------------------------
|
*/

function pairs(array $arr) : int {
   $count = 0;
   for ($i = 1; $i < count($arr); $i+=2) {
      if (abs($arr[$i]-$arr[$i-1])==1) $count++;
   }
   return $count;
}


function pairs(array $arr) : int {
   return count(array_filter(array_chunk($arr, 2), fn($e) => max($e) - min($e) == 1));
}


function pairs(array $arr) : int {
   return array_reduce(
      array_chunk($arr, 2),
      static fn($res, $pair) => max($pair) - min($pair) === 1 ? ++$res : $res ?? 0
   );
}


function pairs(array $arr) : int {
   return count(array_filter(
      array_chunk($arr, 2), fn($n) => max($n) - min($n) == 1
   ));
}


print_r(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]) . ' ' . 3 . '
');
print_r(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) . ' ' . 2 . '
');
print_r(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]) . ' ' . 0 . '
');