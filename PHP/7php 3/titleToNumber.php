<?php
/*
|--------------------------------------------------------------------------
| Excel sheet column numbers
|--------------------------------------------------------------------------
|
*/

function titleToNumber($title) {
   $res = 0;
   for ($i = 0; $i < strlen($title); $i++) {
      $res = $res * 26 + (ord($title[$i]) - ord('A') + 1);
   }
   return $res;
}


function titleToNumber($title) {
   return array_reduce(str_split($title), fn ($c, $i) => $c * 26 + (ord($i) - 64));
}


function titleToNumber($title) {
   $res = $i = 0;
   foreach (array_reverse(str_split($title)) as $t) $res += (ord($t)-64) * 26**$i++; 
   return $res;
}


print_r(titleToNumber("A") . ' ' . 1 . '
');
print_r(titleToNumber("Z") . ' ' . 26 . '
');
print_r(titleToNumber("AA") . ' ' . 27 . '
');
print_r(titleToNumber("AZ") . ' ' . 52 . '
');
print_r(titleToNumber("BA") . ' ' . 53 . '
');
print_r(titleToNumber("CODEWARS") . ' ' . 28779382963 . '
');