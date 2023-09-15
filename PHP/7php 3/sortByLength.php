<?php
/*
|--------------------------------------------------------------------------
| Sort array by string length
|--------------------------------------------------------------------------
|
*/

function sortByLength($arr) {
   usort($arr, function($a, $b) {
      return strlen($a) - strlen($b);
   });
   return $arr;
}


function sortByLength ($toSort) {
   usort($toSort, fn($a, $b) => strlen($a) - strlen($b));
   return $toSort;
};


function sortByLength ($toSort) {
   $res = [];
   $x = array_map(fn($i) => strlen($i), $toSort); sort($x);
   for ($i = 0; $i < count($x); $i++) {
      for ($j = 0; $j < count($toSort); $j++) {
         if (strlen($toSort[$j]) == $x[$i]) array_push($res, $toSort[$j]);
      }
   }
   return $res;
};


print_r(sortByLength(["Beg", "Life", "I", "To"]));
print_r(sortByLength(["", "Moderately", "Brains", "Pizza"]));
print_r(sortByLength(["Longer", "Longest", "Short"]));