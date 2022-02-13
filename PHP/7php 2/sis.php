<?php
/*
|--------------------------------------------------------------------------
| Sum of integers in string
|--------------------------------------------------------------------------
|
*/

function sum_of_integers_in_string($s) {
   $res = '';
   for ($i=0; $i < strlen($s); $i++) { 
      $res .= ctype_digit($s[$i]) ? intval($s[$i]) : '-';
   }
   return array_sum(array_filter(explode('-', $res), fn($i) => $i != ''));
}


function sum_of_integers_in_string(string $s): int {
   return array_sum(preg_split("@[^\d]@",$s));
}


function sum_of_integers_in_string(string $s): int {
   return preg_match_all("/\d+/", $s, $matches) ? array_sum($matches[0]) : 0;
}


function sum_of_integers_in_string(string $s): int {
   return array_sum(explode(' ', preg_replace('/[^0-9]/', ' ', $s)));
}


print_r(sum_of_integers_in_string("C4t5 are 4m4z1ng."). ' ' . 18 . '
');
print_r(sum_of_integers_in_string("Dogs are our best friends"). ' ' . 0 . '
');
print_r(sum_of_integers_in_string("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"). ' ' . 3635 . '
');