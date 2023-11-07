<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #8: Kill K-th Bit
|--------------------------------------------------------------------------
|
*/

function kill_kth_bit($n, $k) {
   return $n & ~(1 << ($k - 1));
}


function kill_kth_bit(int $n, int $k): int {
   return strlen($b = decbin($n)) < $k ? $n : bindec(substr_replace($b,0,-$k,1));
}


function kill_kth_bit(int $n, int $k): int {
   $x = str_split(strrev(decbin($n)));
   $x[$k-1] = 0;
   return bindec(strrev(implode($x)));
}


print_r(kill_kth_bit(37, 3) . ' ' . 33 . '
');
print_r(kill_kth_bit(37, 4) . ' ' . 37 . '
');
print_r(kill_kth_bit(2147483647, 16) . ' ' . 2147450879 . '
');