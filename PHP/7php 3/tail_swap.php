<?php
/*
|--------------------------------------------------------------------------
| Tail Swap
|--------------------------------------------------------------------------
|
*/

function tail_swap(array $a) {
   $x = explode(':', $a[0]);
   $y = explode(':', $a[1]);
   return ["{$x[0]}:{$y[1]}", "{$y[0]}:{$x[1]}"];
}


function tail_swap(array $a): array {
   return [strstr($a[0], ":", true) . strstr($a[1], ":"), strstr($a[1], ":", true) . strstr($a[0], ":")];
}


function tail_swap(array $a): array {
   return array_map(function($v1,$v2){
      return explode(':',$v1)[0].':'.explode(':',$v2)[1];
   },$a,array_reverse($a));
}


print_r(tail_swap(['abc:123', 'cde:456']));
print_r(tail_swap(['a:12345', '777:xyz']));