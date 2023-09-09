<?php
/*
|--------------------------------------------------------------------------
| Jenny the youngest detective
|--------------------------------------------------------------------------
|
*/

function missing($nums, $str) {
   sort($nums);
   $string = str_replace(" ", "", $str);
   if (max($nums) < strlen($string)) {
      $res = implode("", array_map(function($i) use ($string) {
         return strtolower($string[$i]);
      }, $nums));
      return $res;
   } else {
      return "No mission today";
   }
}


function missing($nums, $str) {
   sort($nums);
   $c = str_split(str_replace(' ', '', strtolower($str)));
   return max($nums)>count($c) ? 'No mission today' : implode('', array_map(function($n) use($c) {
      return $c[$n];
   }, $nums));
}


function missing($nums, $str) {
   sort($nums);
   $res = "";
   $str = preg_replace("/[^a-z]/", "", strtolower($str));
   foreach($nums as $n){
      if (0 <= $n && $n < strlen($str)) $res .= $str[$n];
      else return "No mission today";
   }
   return $res;
}


print_r(missing([5, 0, 3], "I love you") . " ivy
");
print_r(missing([29, 31, 8], "The quick brown fox jumps over the lazy dog") . " bay
");
print_r(missing([12, 4, 6], "Good Morning") . " No mission today
");