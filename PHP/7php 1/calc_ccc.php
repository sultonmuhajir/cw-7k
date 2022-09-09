<?php
/*
|--------------------------------------------------------------------------
| Char Code Calculation
|--------------------------------------------------------------------------
|
*/

function calc($s) {
   return count(array_filter(str_split(implode('', array_map(fn($i) => ord($i), str_split($s)))), fn($i) => $i == 7)) * 6;
}


function calc($s) {
   $res = '';
   foreach (str_split($s) as $char){
      $res .= ord($char);
   }
   return substr_count($res, '7') * 6;
}


function calc($s) {
   return substr_count(join(array_map('ord', str_split($s))), '7') * 6;
}


print_r(calc("abcdef") . ' ' . 6 . '
');
print_r(calc("ifkhchlhfd") . ' ' . 6 . '
');
print_r(calc("aaaaaddddr") . ' ' . 30 . '
');