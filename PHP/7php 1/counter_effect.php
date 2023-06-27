<?php
/*
|--------------------------------------------------------------------------
| Hit Count
|--------------------------------------------------------------------------
|
*/

function counter_effect($hit_count) {
   $res = [];
   for ($i = 0; $i < strlen($hit_count); $i++) {
      $temp = [];
      for ($j = 0; $j <= $hit_count[$i]; $j++) {
         array_push($temp, $j);
      }
      array_push($res, $temp);
   }
   return $res;
}


function counter_effect($hit_count) {
   return array_map(fn($v) => range(0, intval($v)), str_split($hit_count));
}


function counter_effect($hit_count) {
   $str = str_split($hit_count);
   $res = [];
   foreach ($str as $c){
      $res[] = range(0,(int)$c);
   }
   return $res;
}


print_r(counter_effect("1250"));