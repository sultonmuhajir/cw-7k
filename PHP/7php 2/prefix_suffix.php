<?php
/*
|--------------------------------------------------------------------------
| String prefix and suffix
|--------------------------------------------------------------------------
|
*/

function solve($s) {
   $x = 0;
   for ($i = 0; $i <= strlen($s) / 2; $i++) {
      if (substr($s, 0, $i) == substr($s, strlen($s) - $i)) $x = $i;
   }
   return $x;
}


function solve($s) {  
   preg_match_all('/^(.*).*\1$/', $s, $m);
   return strlen($m[1][0]);
}


function solve($s) {  
   $n = floor(strlen($s)/2);
   while ($n>0 && substr($s,0,$n)!=substr($s,-$n)) $n--;
   return $n;  
}


print_r(solve("abcd") . ' ' . 0 . '
');
print_r(solve("abcda") . ' ' . 1 . '
');
print_r(solve("abcdabc") . ' ' . 3 . '
');
print_r(solve("abcabc") . ' ' . 3 . '
');