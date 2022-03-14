<?php
/*
|--------------------------------------------------------------------------
| Check three and two
|--------------------------------------------------------------------------
|
*/

function checkThreeAndTwo($arr) {
   if (count(array_unique($arr)) == 2) {
      $len = count(array_filter($arr, function($i) use ($arr) {
         return $i == array_unique($arr)[0];
      }));
      return $len == 2 || $len == 3;
   } else {
      return false;
   }
}


function checkThreeAndTwo($arr) {
   $counts = array_count_values($arr);
   return count($counts) === 2 && max($counts) === 3;
}


function checkThreeAndTwo($arr) {
   return empty(array_diff(array(2, 3), array_count_values($arr)));
}


function checkThreeAndTwo($arr) {
   $c = array_count_values($arr);
   return in_array(2, $c) && in_array(3, $c);
}


print_r(checkThreeAndTwo(["a", "a", "a", "b", "b"]) . ' ' . true . '
');
print_r(checkThreeAndTwo(["a", "c", "a", "c", "b"]) . ' ' . false . '
');
print_r(checkThreeAndTwo(["a", "a", "a", "a", "a"]) . ' ' . false . '
');