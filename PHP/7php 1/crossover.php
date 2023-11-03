<?php
/*
|--------------------------------------------------------------------------
| Genetic Algorithm Series - #3 Crossover
|--------------------------------------------------------------------------
|
*/

function crossover($c1, $c2, $i) {
   return [substr($c1, 0, $i) . substr($c2, $i), substr($c2, 0, $i) . substr($c1, $i)];
}


function crossover($c1, $c2, $idx) {
   for ($i = $idx; $i < strlen($c1); $i++) {
      list($c1[$i], $c2[$i]) = [$c2[$i], $c1[$i]];
   }
   return [$c1, $c2];
}


function crossover($chromosome1, $chromosome2, $index) {
   return [
      substr($chromosome1, 0, $index) . substr($chromosome2, $index),
      substr($chromosome2, 0, $index) . substr($chromosome1, $index)
   ];
}


print_r(crossover("111000", "000110", 3));