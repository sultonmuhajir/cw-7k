<?php
/*
|--------------------------------------------------------------------------
| Fix string case
|--------------------------------------------------------------------------
|
*/

function solve($s) {
   return count(array_filter(str_split($s), function($i) {
      return ctype_lower($i);
   })) < strlen($s)/2 ? strtoupper($s) : strtolower($s);
}


function solve(string $s): string {
   return preg_match_all('/[a-z]/', $s) >= preg_match_all('/[A-Z]/', $s) ? strtolower($s) : strtoupper($s);
}


function solve($s) {
   return (similar_text($s, strtolower($s)) >= strlen($s)/2) ?  strtolower($s) : strtoupper($s);
}


print_r(solve("code") . " code
");
print_r(solve("CODe") . " CODE
");
print_r(solve("COde") . " code
");
print_r(solve("Code") . " code
");