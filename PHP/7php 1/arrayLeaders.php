<?php
/*
|--------------------------------------------------------------------------
| Array Leaders (Array Series #3)
|--------------------------------------------------------------------------
|
*/

function arrayLeaders($numbers) {
   $res = [];
   for ($i = 0; $i < count($numbers); $i++)
      $numbers[$i] > array_sum(array_slice($numbers, $i + 1)) ? array_push($res, $numbers[$i]) : false;
   return $res;
}

function arrayLeaders($num) {
   return array_values(
      array_filter($num, function ($v, $k) use ($num) {
         return $v>array_sum(array_slice($num, $k+1)); 
      }, ARRAY_FILTER_USE_BOTH)
   );
}


function arrayLeaders($num) {
   $res = [];
   while(count($num)) {
      $values = array_shift($num);
      if($values>array_sum($num)) $res[] = $values;
   }
   return $res;
}


print_r(arrayLeaders([1, 2, 3, 4, 0]));
print_r(arrayLeaders([16, 17, 4, 3, 5, 2]));