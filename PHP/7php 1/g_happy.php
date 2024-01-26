<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #182: Happy "g"
|--------------------------------------------------------------------------
|
*/

function g_happy($str) {
   return !preg_match('/(?<!g)g(?!g)/', $str);
}


function g_happy(string $str): bool {
   return false === strpos(preg_replace('/g{2,}/', '', $str), 'g');
}


function g_happy(string $str): bool {
   return !str_contains(preg_replace('/g+g/', '', $str), 'g');
}


print_r(g_happy("gg0gg3gg0gg") . ' ' . true . '
');
print_r(g_happy("gog") . ' ' . false . '
');
print_r(g_happy("ggg ggg g ggg") . ' ' . false . '
');
print_r(g_happy("A half of a half is a quarter.") . ' ' . true . '
');
print_r(g_happy("good grief") . ' ' . false . '
');
print_r(g_happy("bigger is ggooder") . ' ' . true . '
');
print_r(g_happy("gggggggggg") . ' ' . true . '
');