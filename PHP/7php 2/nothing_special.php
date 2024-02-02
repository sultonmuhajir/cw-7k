<?php
/*
|--------------------------------------------------------------------------
| Nothing special
|--------------------------------------------------------------------------
|
*/

function nothing_special($s): string {
   return !is_string($s) ? "Not a string!" : preg_replace('/[^a-zA-Z0-9\s]/', '', $s);
}


function nothing_special($s): string {
   return gettype($s) == 'string' ? preg_replace("/[^a-z\d\s]/i", '', $s) : "Not a string!";
}


function nothing_special($s): string {
   if (!is_string($s)) return 'Not a string!';
   return preg_replace('/[^\w\s]|[_]/','',$s);
}


print_r(nothing_special("Hello World!") . " Hello World
");
print_r(nothing_special(25) . " Not a string!
");