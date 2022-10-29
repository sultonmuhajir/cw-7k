<?php
/*
|--------------------------------------------------------------------------
| Extra Perfect Numbers (Special Numbers Series #7)
|--------------------------------------------------------------------------
|
*/

function extraPerfect($n) {
   $res = [];
   for ($i=1; $i<=$n; $i+=2) array_push($res, $i);
   return $res;
}


function extraPerfect($n) {
   return range(1, $n, 2);
}


function extraPerfect($n) {
   $result = [];
   $num = 1;
   while($num <= $n) {
      array_push($result, $num);
      $num += 2;
   }
   return $result;
}


print_r(extraPerfect(3));
print_r(extraPerfect(5));
print_r(extraPerfect(7));