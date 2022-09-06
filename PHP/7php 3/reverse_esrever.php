<?php
/*
|--------------------------------------------------------------------------
| esreveR
|--------------------------------------------------------------------------
|
*/

function reverse($a, $res=[]) {
   for ($i = count($a)-1; $i >= 0; $i--) array_push($res, $a[$i]);
   return $res;
}


function reverse(array $a): array {
   return ("array" . "_reverse")($a);
}


function reverse($a, $res=[]) {
   while ($a) $res[] = array_pop($a);
   return $res;
}


print_r(reverse([1, 2, 3]));
print_r(reverse([1, null, 14, "two"]));