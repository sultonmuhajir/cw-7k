<?php
/*
|--------------------------------------------------------------------------
| Sort by Last Char
|--------------------------------------------------------------------------
|
*/

function last($x){
   $res = explode(" ", $x);
   usort($res, function($a, $b) { 
      return substr($a, -1) <=> substr($b, -1);
   });
   return $res;
}


function last($x) {
   $words = explode(" ", $x);
   $lastChars = array_map(function ($e) {
      return substr($e, -1);
   }, $words);
   array_multisort($lastChars, array_keys($words), $words);
   return $words;
}


function last($x) {
   $words = explode(" ", $x);
   usort($words, function($a, $b) {
      return $a[strlen($a) - 1] <=> $b[strlen($b) - 1];
   });
   return $words;
}


print_r(last("man i need a taxi up to ubud"));