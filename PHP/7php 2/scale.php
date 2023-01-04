<?php
/*
|--------------------------------------------------------------------------
| Scaling Squared Strings
|--------------------------------------------------------------------------
|
*/

function scale($s, $k, $n) {
   $s = preg_replace('/[^\n]/',  str_repeat('$0', $k), "$s\n");
   $s = preg_replace('/(\w*\n)/', str_repeat('$1', $n), $s );
   return trim($s);
}


function scale($s, $k, $n) {
   $res = '';
   foreach(explode("\n",$s) as $w){
      $res .= str_repeat(implode('',array_map(function($l) use($k) {
         return str_repeat($l,$k);
      }, tr_split($w)))."\n", $n);
   }
   return trim($res);
}


function scale($s, $k, $n) {
   $r = explode("\n", $s);
   $r = array_map(function ($e) use ($k, $n) {
      $e = preg_replace("/./", str_repeat("\\0", $k), $e);
      return implode("\n", array_fill(0, $n, $e));
   }, $r);
   return trim(implode("\n", $r));
}


print_r(scale("", 5, 5) . " 
");
print_r(scale("Kj\nSH", 1, 2) . " Kj\nKj\nSH\nSH
");