<?php
/*
|--------------------------------------------------------------------------
| Convert an array of strings to array of numbers
|--------------------------------------------------------------------------
|
*/

function toNumberArray(array $stringArray) : array {
   return array_map(function ($i) {
      return floatval($i);
   }, $stringArray);
}


function toNumberArray(array $stringArray) : array {
   return array_map("floatval",$stringArray);
}


function toNumberArray(array $s) : array {
   return array_map(function ($e) { return +$e; }, $s);
}


function toNumberArray(array $array) : array {
   array_walk($array, function (&$item) {
      $item = +$item;
   });
   return $array;
}


print_r(toNumberArray(["1.1", "2.2", "3.3"]));