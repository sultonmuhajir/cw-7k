<?php
/*
|--------------------------------------------------------------------------
| Isograms
|--------------------------------------------------------------------------
|
*/

function isIsogram($string) {
   return $string == "" ? 1 : count(array_unique(str_split(strtolower($string)))) == strlen($string);
}


function isIsogram($s) {
   return strlen(count_chars(strtolower($s),3)) === strlen($s);
}


function isIsogram($s) {
   return array_product(array_count_values(str_split(strtolower($s)))) == 1;
}


function isIsogram($string) {
   return !preg_match("`(.).*\\1`i", $string);
}


print_r(isIsogram("Dermatoglyphics"). ' ' . true . '
');
print_r(isIsogram("isogram"). ' ' . true . '
');
print_r(isIsogram("aba"). ' ' . false . '
');
print_r(isIsogram("moOse"). ' ' . false . '
');
print_r(isIsogram("isIsogram"). ' ' . false . '
');
print_r(isIsogram(""). ' ' . true . '
');