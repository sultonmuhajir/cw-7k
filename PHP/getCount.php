<?php
/*
|--------------------------------------------------------------------------
| Vowel Count
|--------------------------------------------------------------------------
|
*/

function getCount($str) {
   return count(array_filter(str_split($str), function($i) { return $i == "a" || $i == "i" || $i == "u" || $i == "e" || $i == "o"; }));
}


function getCount($str) {
   return preg_match_all("/[aeiou]/", $str);
}


function getCount($str) {
   $findLetters = ['a', 'e', 'i', 'o', 'u'];
   return sizeof(array_intersect(str_split($str), $findLetters));
}


function getCount($str) {
   str_replace(['a','e','i','o','u'],'',$str,$count);
   return $count;
}


print_r(getCount("abracadabra"). ' ' . 5);