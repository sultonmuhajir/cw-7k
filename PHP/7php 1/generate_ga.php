<?php
/*
|--------------------------------------------------------------------------
| Genetic Algorithm Series - #1 Generate
|--------------------------------------------------------------------------
|
*/

function generate($length) {
   $res = "";
   for ($i = 0; $i < $length; $i++) $res .= rand(0, 1);
   return $res;
}


function generate($length) { 
   if (0 === $length) return '';
   return mt_rand(0, 1) . generate($length - 1);
}


function generate($length) {
   return implode('', array_map(function() {
      return mt_rand(0, 1);
   }, range(1, $length)));
}


print_r(generate(16) . ' ' . 16 . '
');
print_r(generate(32) . ' ' . 32 . '
');
print_r(generate(64) . ' ' . 64 . '
');