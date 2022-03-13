<?php
/*
|--------------------------------------------------------------------------
| Find the lucky numbers
|--------------------------------------------------------------------------
|
*/

function filter_lucky(array $a)  {
   return array_values(array_filter($a, fn($i) => str_contains($i, '7')));
}


function filter_lucky(array $a): array {
   return array_values(preg_grep("/7/", $a));
}


function filter_lucky(array $a): array {
   $res = [];
   foreach ($a as $num) {
      if (str_contains((string)$num, "7")) {
         array_push($res, $num);
      }
   }
   return $res;
}


function filter_lucky(array $a): array {
   return array_merge(array_filter($a, function($n) {
      return strpos(strval($n), '7') !== FALSE;
   }));
}


print_r(filter_lucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
print_r(filter_lucky([71, 9907, 69]));