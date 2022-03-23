<?php
/*
|--------------------------------------------------------------------------
| Multiply characters
|--------------------------------------------------------------------------
|
*/

function spam(int $n): string {
   $res = '';
   for ($i=0; $i < $n; $i++) { 
      $res .= 'hue';
   }
   return $res;
}


function spam(int $n): string {
   return str_repeat('hue', $n);
}


function spam(int $n): string {
   return join(array_fill(0, $n, 'hue'));
}


function spam(int $n): string {
   $result = "";
   while ($n --) $result .= "hue";  
   return $result;
}


function spam(int $n): string {
   return implode('', array_map(function($n){
      return 'hue';
   },range(1, $n)));
}


print_r(spam(1) . " hue
");
print_r(spam(6) . " huehuehuehuehuehue
");
print_r(spam(14) . " huehuehuehuehuehuehuehuehuehuehuehuehuehue
");