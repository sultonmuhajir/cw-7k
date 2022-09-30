<?php
/*
|--------------------------------------------------------------------------
| Numbers to Letters
|--------------------------------------------------------------------------
|
*/

function switcher($arr) {
   $letter = " zyxwvutsrqponmlkjihgfedcba!? ";
   return implode('', array_map(function ($i) use ($letter) {
      return $letter[intval($i)];
   }, $arr));
}


function switcher($arr) {
   return join(array_map(function($e){
      return (' '.strrev(join(range('a','z'))).'!? ')[$e];
   }, $arr));
}


function switcher($arr) {
   return implode(array_map(function ($e) {
      return " zyxwvutsrqponmlkjihgfedcba!? "[$e];
   }, $arr));
}


print_r(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]) . " codewars");