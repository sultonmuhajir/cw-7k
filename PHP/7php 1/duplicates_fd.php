<?php
/*
|--------------------------------------------------------------------------
| Find Duplicates
|--------------------------------------------------------------------------
|
*/

function duplicates($arr) {
   $res = [];
   foreach($arr as $key => $value) {
      if ($key != array_search($value, $arr, TRUE) and !in_array($value, $res)) $res[] = $value;
   }
   return $res;
}


function duplicates($arr): array {
   return array_values(array_unique(array_filter($arr, function($value, $key) use ($arr) {
      return $key != array_search($value, $arr, TRUE);
   }, ARRAY_FILTER_USE_BOTH)));
}


function duplicates($arr) {
   $r = [];
   foreach($arr as $i=>$v)
      if (in_array($v,array_slice($arr,0,$i),true) && !in_array($v,$r,true)) $r[] = $v;
   return $r;
}


print_r(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
print_r(duplicates([0, 1, 2, 3, 4, 5]));