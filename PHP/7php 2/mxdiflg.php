<?php
/*
|--------------------------------------------------------------------------
| Maximum Length Difference
|--------------------------------------------------------------------------
|
*/

function mxdiflg($a1, $a2) {
   if (count($a1)==0 || count($a2)==0) return -1;
   $res = [];
   foreach ($a1 as $x) {
      foreach ($a2 as $y) {
         array_push($res, abs(strlen($x)-strlen($y)));
      }
   }
   return max($res);
}


function mxdiflg($a1, $a2) {
   if (empty($a1) || empty($a2)) { return -1; }
   $a2 = array_map('strlen', $a2);
   $a1 = array_map('strlen', $a1);
   return max(abs(min($a2) - max($a1)), abs(max($a2)-min($a1)));
}


function mxdiflg($a1, $a2) {
   return (empty($a1) || empty($a2)) ? -1 : max(array_map(function ($array) {
      return max($array);
   }, array_map(function ($array1) use ($a2) {
      return array_map(function ($array2) use ($array1) {
         return abs(strlen($array2) - strlen($array1));
      }, $a2);
   }, $a1)));
}


$s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
$s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
print_r(mxdiflg($s1, $s2) . ' ' . 13);