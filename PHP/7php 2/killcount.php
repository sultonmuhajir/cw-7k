<?php
/*
|--------------------------------------------------------------------------
| Friday the 13th Part 1
|--------------------------------------------------------------------------
|
*/

function killcount($counselors, $jason){
   $res = [];
   foreach ($counselors as $counselor) {
      if ($counselor[1] < $jason) {
         $res[] = $counselor[0];
      }
   }
   return $res;
}


function killcount($counselors, $jason){
   return array_column(array_filter($counselors, 
      function($c) use ($jason) { return $c[1] < $jason; }), 0);
}


function killcount($counselors, $jason){
   return array_reduce($counselors, function($carry, $item) use ($jason) { 
      $item[1] < $jason && $carry[] = $item[0];
      return $carry;
   }, []);
}


print_r(killcount([["Mike", 7],["Alysa", 3]], 7));