<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #10: Range Bit Counting
|--------------------------------------------------------------------------
|
*/

function range_bit_count($a, $b) {
   $res = '';
   for ($i=$a; $i <= $b; $i++) $res .= decbin($i);
   return strlen(implode('', explode('0', $res)));
}


function range_bit_count(int $a, int $b): int {
   return substr_count(implode(array_map('decbin', range($a,$b))), '1');
}


function range_bit_count(int $a, int $b): int {
	return array_sum(array_map(function($n){
      return substr_count(decbin($n), '1');
	}, range($a, $b)));
}


print_r(range_bit_count(2, 7) . ' ' . 11 . '
');
print_r(range_bit_count(0, 1) . ' ' . 1 . '
');
print_r(range_bit_count(4, 4) . ' ' . 1 . '
');