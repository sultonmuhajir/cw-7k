<?php
/*
|--------------------------------------------------------------------------
| Alan Partridge III - London
|--------------------------------------------------------------------------
|
*/

function alan($x) {
   $count = 0;
   $y = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"];
   for ($i = 0; $i < count($y); $i++) {
      if (in_array($y[$i], $x)) $count += 1;
   }
   return $count == 4 ? "Smell my cheese you mother!" : "No, seriously, run. You will miss it.";
}


function alan(array $a): string {
   $arr = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
   return array_diff($arr, $a) ? 'No, seriously, run. You will miss it.' : 'Smell my cheese you mother!';
}


function alan( array $a ) : string {
   $arr = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
   return count( array_intersect($arr, $a ) ) == 4 ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
}


print_r(alan(["Norwich", "Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway", "London"]) . " Smell my cheese you mother!
");
print_r(alan(["London", "Norwich"]) . " No, seriously, run. You will miss it.
");