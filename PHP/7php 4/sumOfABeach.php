<?php
/*
|--------------------------------------------------------------------------
| Sum of a Beach
|--------------------------------------------------------------------------
|
*/

function sumOfABeach($beach) {
   $res = 0; $x = ["sand", "water", "fish", "sun"];
   foreach ($x as $i) {
      $res += count(explode($i, strtolower($beach)))-1;
   }
   return $res;
}


function sumOfABeach($beach) {
   return preg_match_all('/(sand|water|fish|sun)/i', $beach);
}


function sumOfABeach($beach) {
   return array_sum(array_map(function($x) use ($beach) {
      return substr_count(strtolower($beach), $x);
   }, ['sand','water','fish','sun']));
}


print_r(sumOfABeach("WAtErSlIde") . ' ' . 1 . '
');
print_r(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN") . ' ' . 3 . '
');
print_r(sumOfABeach("gOfIshsunesunFiSh") . ' ' . 4 . '
');
print_r(sumOfABeach("cItYTowNcARShoW") . ' ' . 0 . '
');