<?php
/*
|--------------------------------------------------------------------------
| Cryptanalysis Word Patterns
|--------------------------------------------------------------------------
|
*/

function wordPattern($word) {
   $word = strtolower($word);
   $unq = array_values(array_unique(str_split($word)));
   $res = [];
   for ($i = 0; $i < strlen($word); $i++) {
      array_push($res, array_search($word[$i], $unq));
   }
   return implode('.', $res);
}


function wordPattern($word) {
   $word = str_split(strtolower($word));
   $letters = array_values(array_unique($word));
   return str_replace($letters, array_keys($letters), join('.', $word));
}


function wordPattern($word) {
   $chars = [];
   return implode('.', array_map(function($char) use (&$chars) {
      return in_array($char, $chars) ? array_search($char, $chars) : (array_push($chars, $char) - 1);
   }, str_split(strtolower($word))));
}


print_r(wordPattern("hello") . " 0.1.2.2.3
");
print_r(wordPattern("heLlo") . " 0.1.2.2.3
");
print_r(wordPattern("helLo") . " 0.1.2.2.3
");
print_r(wordPattern("Hippopotomonstrosesquippedaliophobia") . " 0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0
.3.15.1.13");