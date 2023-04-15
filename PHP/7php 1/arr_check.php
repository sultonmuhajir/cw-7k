<?php
/*
|--------------------------------------------------------------------------
| Is every value in the array an array?
|--------------------------------------------------------------------------
|
*/

function arr_check($a) {
   return count(array_filter($a, fn($i) => is_array($i))) == count($a);
}


function arr_check(array $a): bool {
   return count(array_filter($a, 'is_array')) == count($a);
}


function arr_check(array $a): bool {
   foreach($a as $i){
      if(!is_array($i))
         return false;
   }
   return true;
}


print_r(arr_check([]) . ' ' . true . '
');
print_r(arr_check([["string"]]) . ' ' . true . '
');
print_r(arr_check([[1], [2], [3]]) . ' ' . true . '
');
print_r(arr_check(["A", "R", "R", "A", "Y"]) . ' ' . false . '
');