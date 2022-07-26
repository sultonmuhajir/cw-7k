<?php
/*
|--------------------------------------------------------------------------
| Thinkful - String Drills: Repeater
|--------------------------------------------------------------------------
|
*/

function solution($s, $n) {
   return str_repeat($s, $n);
}


function solution($letter, $number) {
   $result = '';
   for ($i = 0; $i < $number; $i++) {
      $result .= $letter;
   }
   return $result;
}


function solution($s, $n) {
   return str_pad($s, $n, $s);
}


function solution($s, $n) {
   $array = [];
   for($i = 1; $i <= $n; $i++){
      array_push($array, $s);
   }
   return implode("",$array);
}


print_r(solution('a', 5). ' aaaaa
');
print_r(solution('Na', 16). ' NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa
');
print_r(solution('Wub ', 6). ' Wub Wub Wub Wub Wub Wub 
');