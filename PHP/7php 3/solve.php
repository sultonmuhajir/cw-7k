<?php
/*
|--------------------------------------------------------------------------
| Numbers in strings
|--------------------------------------------------------------------------
|
*/

function solve($s) {
   preg_match_all('/\d+/', $s, $x);
   return max($x[0]);
}


function solve($s) {
   return max(preg_split('/[a-z]/', $s));
}


function solve($s) {
   return max(explode('.', preg_replace("/[a-z]/", '.', $s)));
}


function solve($s) {
   $res = [];
   for($i = 0; $i < strlen($s); $i++) {
      $res[] = intval(substr($s, $i));
   }
   return max($res);
}


print_r(solve('gh12cdy695m1') . ' ' . 695 . '
');
print_r(solve('2ti9iei7qhr5') . ' ' . 9 . '
');
print_r(solve('vih61w8oohj5') . ' ' . 61 . '
');
print_r(solve('f7g42g16hcu5') . ' ' . 42 . '
');
print_r(solve('lu1j8qbbb85') . ' ' . 85 . '
');