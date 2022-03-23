<?php
/*
|--------------------------------------------------------------------------
| Count the Characters
|--------------------------------------------------------------------------
|
*/

function count_char(string $s, string $c): int {
   return substr_count(strtolower($s), strtolower($c));
}


function count_char(string $s, string $c): int {  
   return strlen(preg_replace("/[^$c]/i","",$s));
}


function count_char(string $s, string $c): int {
   str_ireplace($c, '-', $s, $count);
   return $count;
}


function count_char(string $s, string $c): int {
   preg_match_all("/$c/i", $s, $matches);
   return count($matches[0]);
}


print_r(count_char("fizzbuzz", "z") . ' ' . 4);