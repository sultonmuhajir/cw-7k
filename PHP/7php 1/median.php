<?php
/*
|--------------------------------------------------------------------------
| All Star Code Challenge #14 - Find the median
|--------------------------------------------------------------------------
|
*/

function median($a) {
   sort($a);
   $mid = count($a)/2;
   return count($a) % 2 == 0 ? ($a[$mid-1] + $a[$mid]) / 2 : $a[$mid];
}


function median($a) {
   usort($a, function ($a, $b) {return $a - $b;});
   return count($a) % 2 ? $a[~~(count($a) / 2)] : ($a[count($a) / 2 - 1] + $a[count($a) / 2]) / 2;
}


function median($a) {
   sort($a);
   $val = count($a)%2;
   if(empty($a)){
      return null;
   }
   if($val ==0){
   $result =  (($a[(count($a)/2)-1]+$a[((count($a)/2))])/2);
      return $result;
   }
   $result =($a[floor(count($a)/2)]);
   return $result;
   
}


function median($a) {
   if (count($a)==0) return 0;
   rsort($a); 
   $l = intdiv(count($a), 2); 
   $r = count($a)-1-intdiv(count($a), 2); 
   return ($a[$l]+$a[$r])/2; 
}


print_r(median([3, 2, 1]) . ' ' . 2 . '
');
print_r(median([33, 99, 100, 30, 29, 50]) . ' ' . 41.5 . '
');