<?php
/*
|--------------------------------------------------------------------------
| Currying functions: multiply all elements in an array
|--------------------------------------------------------------------------
|
*/

function multiply_all($arr) {
   return fn($x) => array_map(fn($i) => $i * $x, $arr);
}


function multiply_all(array $ns) {
   return function ($m) use ($ns) {
      return array_map(function ($n) use ($m) { return $n * $m; }, $ns);
   };
}


function multiply_all ($arr) {
   return function ($int) use ($arr) {
   $res = [];
   foreach ($arr as $num) {
      array_push($res, $num * $int);
   }
   return $res;
   };
}


print_r(multiply_all([1, 2, 3])(2));