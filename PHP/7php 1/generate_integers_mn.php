<?php
/*
|--------------------------------------------------------------------------
| Series of integers from m to n
|--------------------------------------------------------------------------
|
*/

function generate_integers(int $m, int $n): array {
   $res = [];
   for ($i=$m; $i <= $n; $i++) { 
      array_push($res, $i);
   }
   return $res;
}


function generate_integers(int $m, int $n): array {
   return range($m, $n);
}


function generate_integers(int $start, int $stop): array {
   $res = [];
   while($start != $stop + 1) {
      $res[] = $start;
      $start++;
   }
   return $res;
}


function generate_integers(int $m, int $n): array {
   $range = range($m, $n);
   foreach($range as $numbers){
      return $range;
   }
}


print_r(generate_integers(2, 5));