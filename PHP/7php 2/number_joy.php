<?php
/*
|--------------------------------------------------------------------------
| Especially Joyful Numbers
|--------------------------------------------------------------------------
|
*/

function number_joy(int $n) {
   $x = array_sum(array_map(fn($i) => intval($i), str_split(strval($n))));
   return $x * intval(strrev(strval($x))) == $n;
}


function number_joy(int $n): bool {
   $sum = array_sum(str_split("$n"));
   $rev = strrev("$sum");
   return $sum*$rev == $n;  
}


function number_joy(int $n): bool {
   $sum = array_sum(str_split($n));
   return $n % $sum === 0 && $n === $sum * strrev($sum);
}


print_r(number_joy(1997) . ' ' . false . '
');
print_r(number_joy(1998) . ' ' . false . '
');
print_r(number_joy(1729) . ' ' . true . '
');
print_r(number_joy(1458) . ' ' . true . '
');