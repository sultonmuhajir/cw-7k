<?php
/*
|--------------------------------------------------------------------------
| Sort Numbers
|--------------------------------------------------------------------------
|
*/

function solution($nums) {
   if ($nums == null) {
      return [];
   } else {
      sort($nums);
      return $nums;
   }
}


function solution($nums) {
   return $nums && sort($nums) ? $nums : [];
}


function solution($nums) {
   $nums = $nums ?? [];
   sort($nums);
   return $nums;
}


function solution($nums) {
   $nums === null ? $nums = [] : sort($nums);
   return $nums;
}


print_r(solution([1, 2, 3, 10, 5]));
print_r(solution(null));
print_r(solution([]));
print_r(solution([20, 2, 10]));
print_r(solution([2, 20, 10]));


// [1, 2, 3, 5, 10]
// []
// []
// [2, 10, 20]
// [2, 10, 20]