<?php
/*
|--------------------------------------------------------------------------
| Series of integers from 0 to n
|--------------------------------------------------------------------------
|
*/

function generate_integers(int $n): array {
   $res = [];
   for ($i=0; $i <= $n; $i++) { 
      array_push($res, $i);
   }
   return $res;
}


function generate_integers(int $n): array {
   return range(0, $n);
}


function generate_integers(int $n): array {
   $array = [];
   $i = 0;
   while ($i <= $n) {
      $array[$i] = $i;
      $i++;
   }
   return $array;
}


function generate_integers(int $n): array {
   $arr = implode(", ",range(0,$n));
   $arr = explode(', ', $arr);
   return $arr;
}


print_r(generate_integers(3));