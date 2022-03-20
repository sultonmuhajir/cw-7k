<?php
/*
|--------------------------------------------------------------------------
| Palindrome Strings
|--------------------------------------------------------------------------
|
*/

function is_palindrome($line) {
   return $line == strrev($line);
}


function is_palindrome($line) {
   $line = (string)$line;
   for($i = 0; $i < strlen($line)/2; $i++){
      if($line[$i] != $line[strlen($line)-$i-1]) return false;
   }
   return true;
}


function is_palindrome($line) {
   $x = str_split($line);
   foreach($x as $k => $v) {
      if ($v != $x[count($x)-$k-1]) return false;
   }
   return true;
}


print_r(is_palindrome("anna") . ' ' . true . '
');
print_r(is_palindrome("walter") . ' ' . false . '
');