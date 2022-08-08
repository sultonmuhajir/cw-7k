<?php
/*
|--------------------------------------------------------------------------
| Maximum Product
|--------------------------------------------------------------------------
|
*/

function adjacentElementsProduct($array) {
   $res = [];
   for ($i = 0; $i < count($array)-1; $i++) {
      array_push($res, $array[$i] * $array[$i + 1]);
   }
   return max($res);
}


function adjacentElementsProduct($a) {
   return array_reduce(range(0,count($a)-2), function ($old,$i) use($a) {
      return max($old,$a[$i]*$a[$i+1]);
   }, $a[0]*$a[1]);
}


function adjacentElementsProduct($array) {
   return max(array_slice(array_map(function($x, $y) {
      return $x * $y;
   }, $array, array_slice($array, 1)), 0, count($array) - 1));
}


print_r(adjacentElementsProduct([5, 8]) . ' ' . 40 . '
');
print_r(adjacentElementsProduct([1, 2, 3]) . ' ' . 6 . '
');
print_r(adjacentElementsProduct([1, 5, 10, 9]) . ' ' . 90 . '
');