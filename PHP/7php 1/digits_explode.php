<?php
/*
|--------------------------------------------------------------------------
| Digits explosion
|--------------------------------------------------------------------------
|
*/

function digits_explode(string $s): string {
   $res = '';
   for ($i = 0; $i < strlen($s); $i++) {
      for ($j = 0; $j < intval($s[$i]); $j++) {
         $res .= $s[$i];
      }
   }
   return $res;
}


function digits_explode(string $s): string {
   return join(array_map(function($n){return str_repeat($n, (int)$n);}, str_split($s)));
}


function digits_explode(string $s): string {
   return str_replace([0,1,2,3,4,5,6,7,8,9],["",1,22,333,4444,55555,666666,7777777,88888888,999999999],$s);
}


function digits_explode(string $s): string {
   $str = '';
   $array = str_split($s);
   foreach ($array as $k => $v) {
      $str .= str_repeat($v, intval($v));
   }
   return $str;
}


print_r(digits_explode("312"));
print_r(digits_explode("102269"));