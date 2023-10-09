<?php
/*
|--------------------------------------------------------------------------
| Dropcaps
|--------------------------------------------------------------------------
|
*/

function dropCap($n) {
   $arr = explode(" ", $n);
   foreach($arr as $key => $word) {
      if (strlen($word) > 2) $arr[$key] = ucfirst(strtolower($word));
   }
   return implode(" ", $arr);
}


function dropCap(string $s): string {
   return preg_replace_callback('/\b\w{3,}/u', fn ($match) => ucfirst(strtolower(reset($match))), $s);
}


function dropCap(string $s): string {
   return implode(' ' , array_map(function($c) {
      return strlen($c) > 2 ? ucfirst(strtolower($c)) : $c;
   }, explode(' ', $s)));
}


print_r(dropCap("Apple Banana") . " Apple Banana
");
print_r(dropCap("Apple") . " Apple
");
print_r(dropCap("") . " 
");
print_r(dropCap("of") . " of
");
print_r(dropCap("  leading spaces") . "   Leading Spaces
");
print_r(dropCap("trailing spaces   ") . " Trailing Spaces   
");
print_r(dropCap("ALL CAPS CRAZINESS") . " All Caps Craziness
");
print_r(dropCap("rAnDoM CaPs CrAzInEsS") . " Random Caps Craziness
");