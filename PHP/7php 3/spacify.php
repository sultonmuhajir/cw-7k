<?php
/*
|--------------------------------------------------------------------------
| Spacify
|--------------------------------------------------------------------------
|
*/

function spacify(string $s): string {
   return implode(' ', str_split($s));
}


function spacify(string $s): string {
   return preg_replace_callback('/.(?!$)/', function($a) { return $a[0] . ' ';}, $s);
}


function spacify(string $s): string {
   $res = "";
   for ($i = 0; $i < strlen($s); $i++) {
      $res .= "$s[$i] ";
   }
   return trim($res);
}


function spacify(string $s): string {
   return rtrim(preg_replace('/\w?/', '$0 ', $s));
}


print_r(spacify('hello world') . ' h e l l o   w o r l d
');
print_r(spacify('12345') . ' 1 2 3 4 5
');