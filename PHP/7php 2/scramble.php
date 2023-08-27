<?php
/*
|--------------------------------------------------------------------------
| String Scramble
|--------------------------------------------------------------------------
|
*/

function scramble($str, $arr) {
   return implode("", array_map(function($v, $i) use ($str, $arr) {
      return $str[array_search($i, $arr)];
   }, $arr, array_keys($arr)));
}


function scramble($str, $arr) {
   $newStr = $str;
   for ($i = 0; $i < strlen($str); $i++) {
      $newStr[$arr[$i]] = $str[$i];
   }
   return $newStr;
}


function scramble($str, $arr){
   $myarr = array_combine($arr, str_split($str));
   ksort($myarr);
   return join($myarr);
}


print_r(scramble("abcd", [0, 3, 1, 2]) . " acdb
");
print_r(scramble("sc301s", [4, 0, 3, 1, 5, 2]) . " c0s3s1
");
print_r(scramble("bskl5", [2, 1, 4, 3, 0]) . " 5sblk
");