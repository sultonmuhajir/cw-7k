<?php
/*
|--------------------------------------------------------------------------
| Ordered Count of Characters
|--------------------------------------------------------------------------
|
*/

function orderedCount($text) {
   $res = [];
   foreach (str_split($text) as $v) {
      $res[$v] = [$v, ($res[$v][1] ?? 0) + 1];
   }
   return strlen($text) ? array_values($res) : [];
}


function orderedCount($text) {
   foreach(array_count_values(str_split($text)) as $char => $count) {
      $char !== '' ? $result[] = [$char, $count] : $result = [];
   }
   return $result;
}


function orderedCount($text) {
   $array = [];
   foreach(array_count_values(str_split($text)) as $letter => $count) {
      $array[] = [$letter, $count];
   }
   return empty($text) ? [] : $array;
}


print_r(orderedCount("abracadabra"));