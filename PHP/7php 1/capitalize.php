<?php
/*
|--------------------------------------------------------------------------
| Alternate capitalization
|--------------------------------------------------------------------------
|
*/

function capitalize($s) {
   $res = ['', ''];
   for ($i=0; $i < count(str_split($s)); $i++) { 
      $res[0] .= $i % 2 != 0 ? strtolower($s[$i]) : strtoupper($s[$i]);
      $res[1] .= $i % 2 == 0 ? strtolower($s[$i]) : strtoupper($s[$i]);
   }
   return $res;
}


function capitalize($s) {
   $result = [$s, $s];
   foreach (str_split($s) as $i => $letter) {
      $result[$i % 2][$i] = strtoupper($letter);
   }
   return $result;
}


function capitalize($s) {
   $u = strtoupper($s);
   for ($i = 0; $i < strlen($u); $i += 2) {
      list($s[$i], $u[$i]) = [$u[$i], $s[$i]];
   }
   return [$s, $u];
}


print_r(capitalize("abcdef"));
print_r(capitalize("codewars"));
print_r(capitalize("abracadabra"));
print_r(capitalize("codewarriors"));