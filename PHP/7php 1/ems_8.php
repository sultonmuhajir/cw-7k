<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #8: Move all exclamation marks to the end of the sentence
|--------------------------------------------------------------------------
|
*/

function remove($s) {
   return str_replace('!', '', $s) . preg_replace('/[^!]/', '', $s);
}


function remove(string $s): string {
   return str_pad(str_replace("!", "", $s),  strlen($s), "!");
}


function remove(string $s): string {
   return str_replace("!", "", $s, $c) . str_repeat('!', $c);
}


print_r(remove("Hi!") . " Hi!
");
print_r(remove("Hi! Hi!") . " Hi Hi!!
");
print_r(remove("Hi! Hi! Hi!") . " Hi Hi Hi!!!
");
print_r(remove("Hi! !Hi Hi!") . " Hi Hi Hi!!!
");
print_r(remove("Hi! Hi!! Hi!") . " Hi Hi Hi!!!!
");