<?php
/*
|--------------------------------------------------------------------------
| The reject() function
|--------------------------------------------------------------------------
|
*/

function reject($array, $predicate) {
   return array_values(array_filter($array, function($x) use ($predicate) {
      return !$predicate($x);
   }));
}


function reject($arr, $iterator) {
   return array_values (array_filter($arr,fn($t)=> !$iterator($t)));
}


function reject($array, $iterator) {
   $res = array();
   foreach ($array as $v) {
      if (!$iterator($v)) $res[] = $v;
   }
   return $res;
}


print_r(reject([1, 2, 3, 4, 5, 6], function ($n) {return $n % 2 == 0;}));