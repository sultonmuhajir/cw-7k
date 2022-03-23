<?php
/*
|--------------------------------------------------------------------------
| Lost number in number sequence
|--------------------------------------------------------------------------
|
*/

function findDeletedNumber(array $arr, array $mixedArr): int {
   return array_sum($arr) - array_sum($mixedArr);
}


function findDeletedNumber(array $arr, array $mixedArr): int {
   return current(array_diff($arr, $mixedArr));
}


function findDeletedNumber(array $arr, array $mixedArr): int {
   foreach($arr as $n) {
      if (!in_array($n, $mixedArr)) {
         return $n;
      }
   }
   return 0;
}


function findDeletedNumber(...$a) {
   return end(array_diff(...$a));
}


print_r(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]) . ' ' . 2 . '
');
print_r(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]) . ' ' . 5 . '
');
print_r(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]) . ' ' . 0 . '
');