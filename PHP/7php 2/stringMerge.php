<?php
/*
|--------------------------------------------------------------------------
| String Merge!
|--------------------------------------------------------------------------
|
*/

function stringMerge($string1, $string2, $letter) {
   return substr($string1, 0, strpos($string1, $letter)) . substr($string2, strpos($string2, $letter));
}


function stringMerge($string1, $string2, $letter) {
   return strstr($string1, $letter, true) . strstr($string2, $letter);
}


function stringMerge($string1, $string2, $letter) {
   return strstr($string1, $letter, true) . strstr($string2, $letter);
}


function stringMerge($string1, $string2, $letter) {
   $res = '';
   foreach (str_split($string1) as $l) {
      if ($l == $letter) break;
      $res .= $l;
   }
   $enc = false;
   foreach (str_split($string2) as $l) {
      if ($l == $letter || $enc) {
         $res .= $l;
         $enc = true;
      }
   }
   return $res;
}


print_r(stringMerge("hello", "world", "l") . " held
");
print_r(stringMerge("coding", "anywhere", "n") . " codinywhere
");
print_r(stringMerge("jason", "samson", "s") . " jasamson
");
print_r(stringMerge("wonderful", "people", "e") . " wondeople
");