<?php
/*
|--------------------------------------------------------------------------
| Thinkful - List Drills: Longest word
|--------------------------------------------------------------------------
|
*/

function longest($words) {
   return max(array_map(function($i) {return strlen($i);}, $words));
}


function longest(array $words): int {
   return max(array_map('strlen',$words));
}


function longest($words) {
   return array_reduce($words, function($a,$b) {return max($a,strlen($b));} ); 
}


print_r(longest(['simple', 'is', 'better', 'than', 'complex']) . ' ' . 7 . '
');
print_r(longest(['explicit', 'is', 'better', 'than', 'implicit']) . ' ' . 8 . '
');
print_r(longest(['beautiful', 'is', 'better', 'than', 'ugly']) . ' ' . 9 . '
');