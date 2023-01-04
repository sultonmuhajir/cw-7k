<?php
/*
|--------------------------------------------------------------------------
| Return the first M multiples of N
|--------------------------------------------------------------------------
|
*/

function multiples($m, $n)  {
   $res = [];
   for ($i = 1; $i <= $m; $i++) {
      array_push($res, $n*$i);
   }
   return $res;
}


function multiples(int $m, float $n): array {
   return array_map(function($c) use ($n){
      return $c * $n;
   }, range(1, $m));
}


function multiples(int $m, float $n): array {
   $arr = [];
   $c = 1;
   while ($c <= $m) {
      $num = $n*$c;
      array_push($arr, $num);
      $c++;
   }
   return $arr;
}


print_r(multiples(3, 5));