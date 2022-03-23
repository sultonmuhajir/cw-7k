<?php
/*
|--------------------------------------------------------------------------
| Reverse words
|--------------------------------------------------------------------------
|
*/

function reverseWords($str) {
   $res = [];
   $arr = explode(' ', $str);
   for ($i=0; $i < count($arr); $i++) { 
      array_push($res, implode('', array_reverse(str_split($arr[$i]))));
   }
   return implode(' ', $res);
}


function reverseWords($str) {
   return implode(' ', array_reverse(explode(' ', strrev($str)))) ;
}


function reverseWords($str) {
   return preg_replace_callback("/[^\s]+/", function ($m) {
      return strrev($m[0]);
   }, $str);
}


function reverseWords($str) {
   return implode(' ', array_map('strrev', explode(' ', $str)));
}


print_r(reverseWords('The quick brown fox jumps over the lazy dog.'). '|| ehT kciuq nworb xof spmuj revo eht yzal .god
');
print_r(reverseWords('apple'). '|| elppa
');
print_r(reverseWords('a b c d'). '|| a b c d
');
print_r(reverseWords('double  spaced  words'). '|| elbuod  decaps  sdrow
');