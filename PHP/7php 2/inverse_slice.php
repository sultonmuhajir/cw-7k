<?php
/*
|--------------------------------------------------------------------------
| Thinkful - List and Loop Drills: Inverse Slicer
|--------------------------------------------------------------------------
|
*/

function inverse_slice($items, $a, $b) {
   return array_merge(array_slice($items, 0, $a), array_slice($items, $b));
}


function inverse_slice(array $items, int $a, int $b): array {
   $res = [];
   for ($i = 0; $i < sizeof($items); $i++) {
      if ($i < $a || $i >= $b) $res[] = $items[$i];
   }
   return $res;
}


function inverse_slice(array $items, int $a, int $b): array {
   array_splice($items,$a,$b-$a);
   return $items;
}


print_r(inverse_slice([12, 14, 63, 72, 55, 24], 2, 4));
print_r(inverse_slice([12, 14, 63, 72, 55, 24], 0, 3));
print_r(inverse_slice(["Intuition", "is", "a", "poor", "guide", "when", "facing", "probabilistic", "evidence"], 5, 13));