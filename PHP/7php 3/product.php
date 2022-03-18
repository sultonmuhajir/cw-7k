<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
|--------------------------------------------------------------------------
|
*/

function product(string $s): int {
   return substr_count($s, '?') * substr_count($s, '!');
}


function product(string $s): int {
   return strlen(str_replace('!','',$s)) * strlen(str_replace('?','',$s));  
}


function product(string $s): int {
   return preg_match_all('/\!/', $s) * preg_match_all('/\?/', $s);
}


function product(string $s): int {
   $x = count_chars($s);
   return $x[ord("!")] * $x[ord("?")];
}


print_r(product("!!!???") . ' ' . 9 . '
');
print_r(product("!???!!") . ' ' . 9 . '
');
print_r(product("!ab? ?") . ' ' . 2 . '
');
print_r(product("!????!!!?") . ' ' . 20 . '
');