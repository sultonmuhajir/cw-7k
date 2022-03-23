<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #176: Reverse Letter
|--------------------------------------------------------------------------
|
*/

function reverseLetter($str){
   return implode('', array_reverse(array_filter(str_split($str), function($i) {
      return preg_match('/[a-z]/', $i);
   })));
}


function reverseLetter($str){
   return strrev(preg_replace('/[^a-z]/', '', $str));
}


function reverseLetter($str){
   return implode('', array_reverse(str_split(preg_replace('/[^A-Za-z]/','',$str))));
}


function reverseLetter($str) {
  $reversed = strrev($str);
  return preg_replace('/[\W\d_.\/]/', '', $reversed);
}


print_r(reverseLetter("krishan") . " nahsirk
");
print_r(reverseLetter("ultr53o?n") . " nortlu
");
print_r(reverseLetter("ab23c") . " cba
");
print_r(reverseLetter("krish21an") . " nahsirk
");