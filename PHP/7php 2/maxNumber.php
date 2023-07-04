<?php
/*
|--------------------------------------------------------------------------
| Form The Largest
|--------------------------------------------------------------------------
|
*/

function maxNumber($n) {
   $arr = str_split(strval($n));
   sort($arr);
   return intval(implode('', array_reverse($arr)));
}


function maxNumber($n): int{
   for($i=0;$i<=200000;$i++) $res[] = str_shuffle($n);
   return ltrim(max($res), 0);
}


function maxNumber($n) {
   $numarr = str_split($n);
   arsort($numarr);
   $number = null;
   foreach ($numarr as $num) {
      $number .= $num;
   }
   return intval($number);
}


function maxNumber($n): int {
   $arr = str_split($n);
   rsort($arr);
   return implode("", $arr);
}


print_r(maxNumber(213) . ' ' . 321 . '
');
print_r(maxNumber(7389) . ' ' . 9873 . '
');
print_r(maxNumber(63792) . ' ' . 97632 . '
');
print_r(maxNumber(566797) . ' ' . 977665 . '
');
print_r(maxNumber(1000000) . ' ' . 1000000) . '
'; 