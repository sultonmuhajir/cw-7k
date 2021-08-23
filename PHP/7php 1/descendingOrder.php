<?php
/*
|--------------------------------------------------------------------------
| Descending Order
|--------------------------------------------------------------------------
|
*/

function descendingOrder(int $n) {
   $arr = str_split(strval($n));
   sort($arr);
   return intval(implode('', array_reverse($arr)));
}


function descendingOrder(int $n): int {
   $asArray = str_split($n);
   arsort($asArray);
   return (int) implode($asArray);
}


function descendingOrder(int $n): int {
   $a = str_split("$n");
   rsort($a);
   return implode('', $a);
}


print_r(descendingOrder(0). ' ' . 0 . '
');
print_r(descendingOrder(1). ' ' . 1 . '
');
print_r(descendingOrder(123456789). ' ' . 987654321 . '
');
print_r(descendingOrder(5617814). ' ' . 8765411 . '
');