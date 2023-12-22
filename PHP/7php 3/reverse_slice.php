<?php
/*
|--------------------------------------------------------------------------
| String reverse slicing 101
|--------------------------------------------------------------------------
|
*/

function reverse_slice($str) {
   $res = [];
   for ($i = 0; $i < strlen($str); $i++) {
      $res[] = implode('', array_reverse(str_split(substr($str, 0, $i + 1))));
   }
   return array_reverse($res);
}


function reverse_slice(string $s): array {
   return array_map(function ($i) use ($s) {return substr(strrev($s), $i);}, range(0, strlen($s) - 1));
}


function reverse_slice(string $s): array {
   $res = [];
   $i = strlen($s);
   while ($i > 0) {
      $res[] = strrev(substr($s, 0, $i));
      $i--;
   }
   return $res;
}


print_r(reverse_slice("123"));
print_r(reverse_slice("abcde"));