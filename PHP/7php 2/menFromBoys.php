<?php
/*
|--------------------------------------------------------------------------
| Sort Out The Men From Boys
|--------------------------------------------------------------------------
|
*/

function menFromBoys($arr) {
   $even = array_unique(array_filter($arr, function($x){return $x%2==0;}));
   $odd = array_unique(array_filter($arr, function($x){return $x%2!=0;}));
   sort($even);
   rsort($odd);
   return array_merge($even, $odd);
}


function menFromBoys($arr) {
   foreach (array_unique($arr) as $v) {
      $v % 2 == 0 ? $m[] = $v : $b[] = $v;
   }
   sort($m); arsort($b);
   return array_merge($m, $b);
}


function menFromBoys($arr) {
   $boys = array_filter($arr, function($n) { return $n % 2; });
   $men = array_diff($arr, $boys);
   sort($men);
   rsort($boys);
   return array_values(array_unique(array_merge($men, $boys)));
}


print_r(menFromBoys([7, 3, 14, 17]));
print_r(menFromBoys([2, 43, 95, 90, 37]));
print_r(menFromBoys([20, 33, 50, 34, 43, 46]));