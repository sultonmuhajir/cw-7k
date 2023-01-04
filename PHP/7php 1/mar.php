<?php
/*
|--------------------------------------------------------------------------
| Debug the functions EASY
|--------------------------------------------------------------------------
|
*/

function multi($array) {
   return array_product($array);
}


function add($array) {
   return array_sum($array);
}


function reverse($string) {
   return strrev($string);
}


print_r(multi([5, 1, 5]) . ' ' . 25 . '
');
print_r(add([9, 8, 5]) . ' ' . 22 . '
');
print_r(reverse("Hello World") . " dlroW olleH
");