<?php
/*
|--------------------------------------------------------------------------
| Largest 5 digit number in a series
|--------------------------------------------------------------------------
|
*/

function solution(string $s): int {
   $res = 0;
   for($i = 0; $i < strlen($s); $i++) {
      $res = max($res, intval(substr($s, $i, 5)));
   }
   return $res;
}


function solution(string $s):int{
	preg_match_all("/(?=(\d{5}))/",$s,$matches);
	return max($matches[1]);
}


function solution(string $s): int {
   return max(array_map(function($n) use ($s) { 
      return substr($s, $n, 5);
   } , range(0, strlen($s)-1)));
}


print_r(solution("1234567898765") . ' ' . 98765 . '
');
print_r(solution("731674765") . ' ' . 74765 . '
');