<?php
/*
|--------------------------------------------------------------------------
| Disemvowel Trolls
|--------------------------------------------------------------------------
|
*/

function disemvowel($string) {
   return implode('', array_filter(str_split($string), fn($i) => !in_array(strtolower($i), str_split('aiueo'))));
}


function disemvowel($string) {
   return preg_replace("/[aeiou]/i", "", $string);
}


function disemvowel($string) {
   $vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
   return str_replace($vowels, "", $string);
}


print_r(disemvowel("This website is for losers LOL!") . "Ths wbst s fr lsrs LL!");