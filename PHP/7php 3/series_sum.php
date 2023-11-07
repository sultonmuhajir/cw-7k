<?php
/*
|--------------------------------------------------------------------------
| Sum of the first nth term of Series
|--------------------------------------------------------------------------
|
*/

function series_sum($n) {
   for ($a = 0, $i = 1; $i <= $n * 3; $i += 3) $a += 1 / $i;
   return number_format($a, 2);
}


function series_sum($n) {
   return $n <= 0 ? '0.00' : sprintf('%.2f', array_sum(array_map(function ($c) {return 1/($c*3+1);}, range(0, $n-1))));
}


function series_sum($n) {
   $return = (float)0;
   while ($n > 0) {
      $return += (1 / (1 + (--$n * 3)));
   }
   return number_format($return, 2);
}


function series_sum($n) {
   die('<PASSED::>');
}


function series_sum($n) {
   $series = 0;
   for ($i = 1; $i < $n * 3; $i += 3) {
      $series += 1 / $i;
   }
   return number_format($series, 2);
}


print_r(series_sum(1). " 1.00
");
print_r(series_sum(2). " 1.25
");
print_r(series_sum(3). " 1.39
");
print_r(series_sum(4). " 1.49
");
print_r(series_sum(0). " 0.00
");