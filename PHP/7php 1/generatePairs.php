<?php
/*
|--------------------------------------------------------------------------
| Pairs of integers from m to n
|--------------------------------------------------------------------------
|
*/

function generatePairs($m, $n) {
   $res = [];
   for ($i = $m; $i <= $n; $i++) {
      for ($j = $i; $j <= $n; $j++) $res[] = [$i, $j];
   }
   return $res;
}


function generatePairs(int $m,int $n) {
   $res = [];
   while($m <= $n) {
      foreach(range($m, $n) as $value) $res[] = [$m, $value];
      $m++;
   }
   return $res;
}


function generatePairs(int $m, int $n): array {
   $res = [];
   for ($i = $m; $i <= $n; $i++) for ($j = $i; $j <= $n; $j++) array_push($res, [$i, $j]);
   return $res;
}


print_r(generatePairs(2, 4));