<?php
/*
|--------------------------------------------------------------------------
| MOD 256 without the MOD operator
|--------------------------------------------------------------------------
|
*/

function mod256WithoutMod($number) {
   return $number - (($number / 256) ^ 0) * 256;
}


function mod256WithoutMod($n) {
   return $n - (intval($n/256)*256);
}


function mod256WithoutMod($number) {
   return $number - (256 * intdiv($number, 256));
}


print_r(mod256WithoutMod(254) . ' ' . 254 . '
');
print_r(mod256WithoutMod(256) . ' ' . 0 . '
');
print_r(mod256WithoutMod(258) . ' ' . 2 . '
');
print_r(mod256WithoutMod(-254) . ' ' . -254 . '
');
print_r(mod256WithoutMod(-256) . ' ' . 0 . '
');
print_r(mod256WithoutMod(-258) . ' ' . -2 . '
');