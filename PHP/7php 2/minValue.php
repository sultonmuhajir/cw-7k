<?php
/*
|--------------------------------------------------------------------------
| Form The Minimum
|--------------------------------------------------------------------------
|
*/

function minValue($arr) {
   $unq = array_unique($arr);
   sort($unq);
   return intval(implode('', $unq));
}


function minValue($arr) {
   return (int)count_chars(join($arr),3);
}


function minValue($arr) {
   sort($arr);
   return (int)implode(array_unique($arr));
}


print_r(minValue([5, 6, 9, 9, 7, 6, 4]) . ' ' . 45679 . '
');
print_r(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]) . ' ' . 134679 . '
');
print_r(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]) . ' ' . 356789 . '
');