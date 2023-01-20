<?php
/*
|--------------------------------------------------------------------------
| Automorphic Number (Special Numbers Series #6)
|--------------------------------------------------------------------------
|
*/

function automorphic($n) {
   return ["Not!!", "Automorphic"][$n == substr(strval($n**2), -strlen(strval($n)))];
}


function automorphic($n) {
   return str_ends_with($n ** 2, $n) ? "Automorphic" : "Not!!";
}


function automorphic($n) {
   return $n == substr($n**2, -strlen($n)) ? "Automorphic" : "Not!!";
}


function automorphic($n) {
   return preg_match("/$n$/", $n**2) ? 'Automorphic' : 'Not!!';
}


print_r(automorphic(1) . " Automorphic
");
print_r(automorphic(3) . " Not!!
");
print_r(automorphic(76) . " Automorphic
");
print_r(automorphic(95) . " Not!!
");
print_r(automorphic(625) . " Automorphic
");
print_r(automorphic(225) . " Not!!
");