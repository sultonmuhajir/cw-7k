<?php
/*
|--------------------------------------------------------------------------
| Cat and Mouse - Easy Version
|--------------------------------------------------------------------------
|
*/

function cat_mouse(string $s): string {
   return strlen($s) > 5 ? "Escaped!" : "Caught!";
}


function cat_mouse(string $s): string {
   return preg_match_all('/\./', $s) <= 3 ? 'Caught!' : 'Escaped!';
}


function cat_mouse(string $s): string {
   return substr_count($s,'.') > 3 ? 'Escaped!' : 'Caught!';
}


function cat_mouse(string $s): string {
   return preg_match('/C\.{0,3}m/', $s) ? 'Caught!' : 'Escaped!';
}


print_r(cat_mouse('C....m') . " Escaped!
");
print_r(cat_mouse('C..m') . " Caught!
");
print_r(cat_mouse('C.....m') . " Escaped!
");