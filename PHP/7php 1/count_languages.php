<?php
/*
|--------------------------------------------------------------------------
| Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
|--------------------------------------------------------------------------
|
*/

function count_languages($a) {
   $res = [];
   $unq = array_map(fn($i) => $i['language'], $a);
   foreach ($unq as $i) {
      $res += [$i => count(array_filter($a, fn($x) => $x['language'] == $i))];
   }
   return $res;
}


function count_languages($a) {
   return array_count_values(array_column($a,"language"));
}


function count_languages($arr) {
   return array_reduce(array_column($arr, 'language'), fn($res, $x) =>
      array_merge($res, [$x => ($res[$x] ?? 0) + 1])
   , []);
}


function count_languages($a) {
   $res = [];
   foreach($a as $item) {
      array_key_exists($item["language"], $res) ?: $res[$item["language"]] = 0;
      $res[$item["language"]]++;
   }
   return $res;
}