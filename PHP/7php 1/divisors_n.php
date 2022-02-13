<?php
/*
|--------------------------------------------------------------------------
| Count the divisors of a number
|--------------------------------------------------------------------------
|
*/

function divisors($n) {
   $res = [];
   for ($i=1; $i <= $n; $i++) { 
      if ($n % $i == 0) {
         array_push($res, $i);
      }
   }
   return count($res);
}


function divisors($n) {
   return count(array_filter(range(1, $n), function($d)use($n){ return $n%$d==0; }));
}


function divisors($n, $counter = 0) {
   for ($i = 1; $i < $n+1; $i++) if($n%$i == 0) $counter++;
   return $counter;
}


function divisors($n) {
   return array_count_values(array_map(function($a) use ($n) {return $n % $a; }, range(1, $n)))['0'];   
}


print_r(divisors(1) . ' ' . 1 . '
');
print_r(divisors(10) . ' ' . 4 . '
');
print_r(divisors(11) . ' ' . 2 . '
');
print_r(divisors(54) . ' ' . 8 . '
');