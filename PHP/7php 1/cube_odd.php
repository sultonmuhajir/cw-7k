<?php
/*
|--------------------------------------------------------------------------
| Sum of Odd Cubed Numbers
|--------------------------------------------------------------------------
|
*/

function cube_odd($a) {
   if (count(array_filter($a, fn($i) => gettype($i) != 'integer')) > 0) {
      return NULL;
   } else {
      return array_sum(array_map(fn($i) => $i ** 3, array_filter($a, fn($i) => $i % 2 != 0)));
   }
}


function cube_odd($a) {
   $sum = 0;
   foreach ($a as $number) {
      if (!is_numeric($number)) {
         return null;
      }
      if ($number & 1) {
         $sum += ($number ** 3);
      }
   }
   return $sum;
}


function cube_odd($a) {
   $sum = 0;
   foreach($a as $value){  
      if (!is_int($value))
         return null;
      $sum += $value % 2 == 0 ? 0 : pow($value, 3);
   }
   return $sum;
}


function cube_odd($a) {
   return count(array_filter($a, fn($v) => is_int($v))) == count($a) ?
      array_sum(array_filter(array_map(fn($v) => $v**3, $a), fn($v) => $v % 2)) : 
      null;
}


print_r(cube_odd([1, 2, 3, 4]) . ' ' . 28 . '
');
print_r(cube_odd([-3, -2, 2, 3]) . ' ' . 0 . '
');
print_r(cube_odd(["a", 12, 9, "z", 42]) . ' ' . NULL . '
');
print_r(cube_odd([]) . ' ' . 0 . '
');
print_r(cube_odd([2, 4]) . ' ' . 0) . '
'; 