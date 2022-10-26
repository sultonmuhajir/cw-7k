<?php
/*
|--------------------------------------------------------------------------
| All unique
|--------------------------------------------------------------------------
|
*/

function hasUniqueChars($string) {
   return strlen($string) == count(array_unique(str_split($string)));
}


function hasUniqueChars($string) {
   return !preg_match('/(.).*\\1/', $string);
}


function hasUniqueChars($string) {
   return count(count_chars($string, 1)) == strlen($string);
}


print_r(hasUniqueChars("  nAa") . ' ' . false . '
');
print_r(hasUniqueChars("abcdef") . ' ' . true . '
');
print_r(hasUniqueChars("aA") . ' ' . true . '
');
print_r(hasUniqueChars("++-") . ' ' . false . '
');