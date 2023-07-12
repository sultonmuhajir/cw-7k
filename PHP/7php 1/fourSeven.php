<?php
/*
|--------------------------------------------------------------------------
| Four/Seven
|--------------------------------------------------------------------------
|
*/

function solution($n) {
   return 4*($n==7) + 7*($n==4);
}


function solution($n) {
   return [4 => 7, 7 => 4][$n];
}


function solution($n) {
   while ($n == 4 || $n == 7) return $n ^ 3;
   return 0;
}


print_r(solution(4) . ' ' . 7 . '
');
print_r(solution(7) . ' ' . 4 . '
');