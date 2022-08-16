<?php
/*
|--------------------------------------------------------------------------
| Alphabetical Addition
|--------------------------------------------------------------------------
|
*/

function addLetters(...$letters) {
   $abj = "zabcdefghijklmnopqrstuvwxyz";
   $res = 0;
   foreach ($letters as $v) $res += strpos($abj, $v);
   return $abj[$res%26];
}


function addLetters(...$arr): string {
   if (empty($arr)) return 'z';
   $s = array_reduce($arr, function($carry, $item){
      return $carry + ord($item) - 96;
   }) - 1;
   return chr($s % 26 + 97);
}


function addLetters(...$letters) {
   return !empty($letters) ? chr((array_sum(array_map(function($char){
      return ord($char) - 96;
   }, $letters)) - 1) % 26 + 97) : 'z';
}


print_r(addLetters("a", "b", "c") . " f
");
print_r(addLetters("y", "c", "b") . " d
");
print_r(addLetters() . " z
");