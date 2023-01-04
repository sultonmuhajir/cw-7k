<?php
/*
|--------------------------------------------------------------------------
| Numerical Palindrome #1
|--------------------------------------------------------------------------
|
*/

function palindrome($num) {
   return gettype($num) == 'integer' && $num >= 0 ? strval($num) == strrev(strval($num)) : "Not valid";
}


function palindrome($num) {
   return !is_int($num) || $num < 0 ? "Not valid" : $num == strrev($num);
}


function palindrome($num) {
   return intval($num) == $num && $num > 0 ? $num == strrev($num) : "Not valid";
}


print_r(palindrome(1221) . ' ' . true . '
');
print_r(palindrome(123322) . ' ' . false . '
');
print_r(palindrome("ACCDDCCA") . " Not valid
");
print_r(palindrome("1221") . " Not valid
");
print_r(palindrome(-450) . " Not valid
");