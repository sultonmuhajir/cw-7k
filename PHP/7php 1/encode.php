<?php
/*
|--------------------------------------------------------------------------
| Ciphers #1 - The 01 Cipher
|--------------------------------------------------------------------------
|
*/

function encode($s) {
   $res = "";
   for ($i = 0; $i < strlen($s); $i++) {
      $num = ord(strtolower($s[$i])) - 97;
      $res .= ($num < 0 || $num > 25) ? $s[$i] : ($num % 2 == 0 ? "0" : "1");
   }
   return $res;
}


function encode(string $s): string {
   return preg_replace_callback('/[a-z]/i', function ($m) {return (ord($m[0]) + 1) % 2;}, $s);
}


function encode(string $s): string {
   return implode(array_map(function ($e) {
      return ctype_alpha($e) ? (ord($e) + 1) % 2 : $e;
   }, str_split($s)));
}


print_r(encode("Hello World!") . " 10110 00111!");