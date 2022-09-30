<?php
/*
|--------------------------------------------------------------------------
| Tidy Number (Special Numbers Series #9)
|--------------------------------------------------------------------------
|
*/

function tidyNumber($n) {
   $x = str_split(strval($n));
   sort($x);
   return str_split(strval($n)) == $x;
}


function tidyNumber($n) {
   $arr = str_split($n);
   foreach($arr as $k=> $digit){
      if($arr[$k - 1] > $digit) {
         return false;
      }
   }
   return true;
}


function tidyNumber($n) {
   return !in_array(false, array_map(function ($value, $checker) {
      return $value <= $checker;
   }, 
   array_slice(str_split($n), 0, count(str_split($n)) - 1), 
   array_slice(str_split($n), 1)));
}


function tidyNumber($n) {
   $a = str_split($n);
   for($i=0;$i<count($a)-1;$i++){
      if($a[$i] > $a[$i+1]) return false;
   }
   return true;
}


print_r(tidyNumber(12) . ' ' . true . '
');
print_r(tidyNumber(102) . ' ' . false . '
');
print_r(tidyNumber(9672) . ' ' . false . '
');
print_r(tidyNumber(2789) . ' ' . true . '
');
print_r(tidyNumber(2335) . ' ' . true . '
');