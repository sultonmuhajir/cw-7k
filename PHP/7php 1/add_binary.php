<?php
/*
|--------------------------------------------------------------------------
| Binary Addition
|--------------------------------------------------------------------------
|
*/

function add_binary($a, $b) {
   return decbin($a + $b);
}


function add_binary($a, $b) {
   $out = "";
   $sum = $a + $b;
   if (!$sum) return "0";
   for (; $sum>0; $sum=$sum>>1) {
      $out = (($sum%2)?"1":"0") . $out;
   }
   return $out;
}


function add_binary($a, $b) {
   $binary = $a + $b;
   return decbin($binary);
}


print_r(add_binary(1, 1) . " 10
");
print_r(add_binary(5, 9) . " 1110
");