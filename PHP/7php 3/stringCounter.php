<?php
/*
|--------------------------------------------------------------------------
| How many times does it contain?
|--------------------------------------------------------------------------
|
*/

function stringCounter($inputS,$charS){
   return substr_count($inputS, $charS);
}


function stringCounter($inputS,$charS){
   preg_match_all('/(['.$charS.'])/', $inputS, $res);
   return count($res[0]);
}


function stringCounter(string $s, string $c): int {
   return count(array_filter(str_split($s), function ($e) use ($c) {
      return $c === $e;
   }));
}


print_r(stringCounter("Hello World!", "o") . ' ' . 2 . '
');
print_r(stringCounter("Do you like Harry Potter?", "?") . ' ' . 1 . '
');
print_r(stringCounter("abcdefg", "a") . ' ' . 1 . '
');