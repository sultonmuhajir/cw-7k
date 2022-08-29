<?php
/*
|--------------------------------------------------------------------------
| Predict your age!
|--------------------------------------------------------------------------
|
*/

function predictAge(...$ages){
   $res = 0;
   foreach ($ages as $age) $res += $age ** 2;
   return sqrt($res)/2 | 0;
}


function predictAge(...$a){
   return array_reduce($a,'hypot',0)>>1;
}


function predictAge(...$age){
   return floor(sqrt(array_sum(array_map(function($a){return $a*$a;}, $age))) / 2);
}


print_r(predictAge(65, 60, 75, 55, 60, 63, 64, 45));