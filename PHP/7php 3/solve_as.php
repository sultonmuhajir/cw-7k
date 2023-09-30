<?php
/*
|--------------------------------------------------------------------------
| Alphabet symmetry
|--------------------------------------------------------------------------
|
*/

function solve($arr) {
   $abj = "abcdefghijklmnopqrstuvwxyz";
   $res = [];
   for ($i = 0; $i < count($arr); $i++) {
      $count = 0;
      for ($j = 0; $j < strlen($arr[$i]); $j++) {
         if (strtolower($arr[$i][$j]) == $abj[$j]) $count += 1;
      }
      array_push($res, $count);
   }
   return $res;
}


function solve($arr) {
   return array_map(function($n) {
      return count(array_intersect_assoc(range('a', 'z'), str_split(strtolower($n))));
   }, $arr);
}


function solve($arr) {
   $alp = range('a', 'z');
   $res = [];
   foreach($arr as $string) {
      array_push($res, count(array_intersect_assoc(str_split(strtolower($string)), $alp)));
   }
   return $res;
}


print_r(solve(["abode", "ABc", "xyzD"]));
print_r(solve(["abide", "ABc", "xyz"]));
print_r(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]));
print_r(solve(["encode", "abc", "xyzD", "ABmD"]));