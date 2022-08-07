<?php
/*
|--------------------------------------------------------------------------
| Love vs friendship
|--------------------------------------------------------------------------
|
*/

function wordsToMarks(string $str): int {
   $abj = str_split("_abcdefghijklmnopqrstuvwxyz");
   $res = 0;
   for ($i=0; $i < strlen($str); $i++) { 
      $res += array_search($str[$i], $abj);
   }
   return $res;
}


function wordsToMarks(string $str): int {
   return array_reduce(str_split($str), function($result, $ch) {
      return $result + ord($ch) - 96;
   }, 0);
}


function wordsToMarks(string $str): int {
   return array_sum(array_map('ord',str_split($str)))-strlen($str)*96;
}


function wordsToMarks(string $str): int {
   $sum = 0;
   foreach(str_split($str) as $l){
      $sum += ord($l) - 96;
   }
   return $sum;
}


print_r(wordsToMarks("attitude") . ' ' . 100 . '
');
print_r(wordsToMarks("friends") . ' ' . 75 . '
');
print_r(wordsToMarks("family") . ' ' . 66 . '
');
print_r(wordsToMarks("selfness") . ' ' . 99 . '
');
print_r(wordsToMarks("knowledge") . ' ' . 96 . '
');