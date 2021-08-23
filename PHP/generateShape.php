<?php
/*
|--------------------------------------------------------------------------
| Build a square
|--------------------------------------------------------------------------
|
*/

function generateShape($int) {
   $res = "";
   for ($i=0; $i < $int; $i++) { 
      for ($j=0; $j < $int; $j++) { 
         $res .= '+';
      }
      if ($i != $int - 1) {
         $res .= "\n";
      }
   }
   return $res;
}


function generateShape($int) {
   return trim(str_repeat(str_repeat('+', $int) . "\n", $int));
}


function generateShape($int) {
   return substr(str_repeat(str_repeat("+", $int) . "\n", $int), 0, strlen(str_repeat(str_repeat("+", $int) . "\n", $int)) - 1);
}


function generateShape($n): string {
   return implode("\n", array_fill(0, $n, str_repeat('+', $n)));
}


print_r(generateShape(8));
print_r(generateShape(3));