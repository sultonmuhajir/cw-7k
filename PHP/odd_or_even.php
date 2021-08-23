<?php
/*
|--------------------------------------------------------------------------
| Odd or Even?
|--------------------------------------------------------------------------
|
*/

function odd_or_even(array $a): string {
   return array_sum($a) % 2 == 0 ? 'even' : 'odd';
}


function odd_or_even(array $a): string {
   $res = 0;
   foreach($a as $i) { 
      $res += $i;
   }
   return $res % 2 == 0 ? "even" : "odd";
}


function odd_or_even(array $array): string {
   return ['even', 'odd'][array_sum($array) & 1];
}


print_r(odd_or_even([0, 1, 5]). ' even
');
print_r(odd_or_even([0, 1, 3]). ' even
');
print_r(odd_or_even([5, 1, 3]). ' odd
');
print_r(odd_or_even([1023, 1, 2]). ' even
');