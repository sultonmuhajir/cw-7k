<?php
/*
|--------------------------------------------------------------------------
| Word values
|--------------------------------------------------------------------------
|
*/

function word_value($a) {
   $res = [];
   for ($i = 0; $i < count($a); $i++) {
      $x = str_replace(' ', '', $a[$i]);
      $count = 0;
      for ($j = 0; $j < strlen($x); $j++) {
         $count += ord($x[$j])-96;
      }
      array_push($res, $count * ($i+1));
   }
   return $res;
}


function word_value(array $a): array {
   foreach(array_map(function($e){
      return array_sum(array_map(function($x){
         return array_search($x, range('a', 'z'))+1;
      },str_split(str_replace(' ','',$e))));
   }, $a) as $key => $value) $result[] = $value * ($key+1);
   return $result;
}


function word_value(array $a): array {
   foreach ($a as $k => &$item) {
      $item = str_replace(' ', '', $item);
      $item = ($k + 1) * array_reduce(str_split($item), function($sum, $i){return $sum + ord($i) - 96;});
   }
   return $a;
}


print_r(word_value(["abc abc", "abc abc", "abc", "abc"]));