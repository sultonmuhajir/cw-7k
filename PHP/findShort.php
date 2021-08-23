<?php
/*
|--------------------------------------------------------------------------
| Shortest Word
|--------------------------------------------------------------------------
|
*/

function findShort($str){
   $arr = explode(' ', $str);
   $min = strlen($arr[0]);
   for ($i=0; $i < count($arr); $i++) { 
      for ($j=0; $j < strlen($arr[$i]); $j++) { 
         $hsl = strlen($arr[$i]);
      }
      if ($hsl < $min) {
         $min = $hsl;
      }
   }
   return $min;
}


function findShort($str){
   return min(array_map('strlen', (explode(' ', $str))));
}


function findShort($str){
   $str = explode(" ",$str);
   array_multisort(array_map('strlen', $str), $str);
   return strlen($str[0]);
}


function findShort($str){
   $words = explode(" ", $str);
   usort($words, function($a, $b){ return strlen($a) <=> strlen($b); });
   return strlen(reset($words));
}


print_r(findShort("sulton muhajir"). ' ' . 6 . '
');
print_r(findShort("bitcoin take over the world maybe who knows perhaps"). ' ' . 3 . '
');
print_r(findShort("turns out random test cases are easier than writing out basic ones"). ' ' . 3 . '
');