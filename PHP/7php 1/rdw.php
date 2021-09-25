<?php
/*
|--------------------------------------------------------------------------
| Remove duplicate words
|--------------------------------------------------------------------------
|
*/

function removeDuplicateWords($s) {
   $arr = explode(' ', $s);
   $res = [];
   foreach ($arr as $i) {
      if (in_array($i, $res) == false) {
         array_push($res, $i);
      }
   }
   return implode(' ', $res);
}


function removeDuplicateWords($s) {
   return implode(" ", array_unique(explode(" ", $s)));
}


function removeDuplicateWords($s) {
   $array = array_flip(explode(' ', $s));
   $res = '';
   foreach ($array as $key => $value) {
      $res .= $key . ' ';
   }
   return trim($res);
}


function removeDuplicateWords($s) {
   return implode(' ',array_unique(str_word_count($s,1)));
}


print_r(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"). " alpha beta gamma delta
");
print_r(removeDuplicateWords("my cat is my cat fat"). " my cat is fat
");