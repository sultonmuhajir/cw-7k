<?php
/*
|--------------------------------------------------------------------------
| Minimum Steps (Array Series #6)
|--------------------------------------------------------------------------
|
*/

function minimumSteps($nums, $value) {
   sort($nums);
   for ($i = 0, $sum = 0; $i < count($nums); $i++) {
      $sum += $nums[$i];
      if ($sum >=$value) {
         return $i;
      }
   }
}


function minimumSteps($nums, $value, $i = 1) : int {
  sort($nums);
  return array_sum(array_slice($nums, 0, $i)) >= $value ? $i - 1 : minimumSteps($nums, $value, $i + 1);
}


function minimumSteps($nums, $value) {
   sort($nums);
   $res = [];
   while(array_sum($res) < $value) {
      $res[] = array_shift($nums);
   }
   return count($res) - 1;
}


function minimumSteps($nums, $value) {
   sort($nums, SORT_NUMERIC);
   return array_reduce($nums, function($acc, $item) use ($value) {
      return $acc[0] < $value ? [$acc[0] + $item, $acc[1] + 1] : $acc;
   }, [0, -1])[1];
}


print_r(minimumSteps([4, 6, 3], 7) . ' ' . 1 . '
');
print_r(minimumSteps([10, 9, 9, 8], 17) . ' ' . 1 . '
');
print_r(minimumSteps([8, 9, 10, 4, 2], 23) . ' ' . 3 . '
');
print_r(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464) . ' ' . 8 . '
');
print_r(minimumSteps([4, 6, 3], 2) . ' ' . 0 . '
');