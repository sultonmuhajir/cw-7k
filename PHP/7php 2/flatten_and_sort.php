<?php
/*
|--------------------------------------------------------------------------
| Flatten and sort an array
|--------------------------------------------------------------------------
|
*/

function flatten_and_sort($array) {
   $arr = [];
   for ($i=0; $i < count($array); $i++) { 
      for ($j=0; $j < count($array[$i]); $j++) { 
         array_push($arr, $array[$i][$j]);
      }
   }
   sort($arr);
   return $arr;
}


function flatten_and_sort($array) {
   $x = array_merge(...$array);
   sort($x);
   return $x;
}


function flatten_and_sort($array) {
   $res = array_merge_recursive(...$array);
   sort($res);
   return $res;
}


function flatten_and_sort($array) {
   $res = call_user_func_array('array_merge',$array);
   sort($res);
   return $res ;
}


print_r(flatten_and_sort([
   [3, 2, 1],
   [7, 9, 8],
   [6, 4, 5]
]));