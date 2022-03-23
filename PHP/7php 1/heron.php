<?php
/*
|--------------------------------------------------------------------------
| Heron's formula
|--------------------------------------------------------------------------
|
*/

function heron($a, $b, $c) {
   $x = ($a + $b + $c) / 2;
   return sqrt($x * ($x - $a) * ($x - $b) * ($x - $c));
}


function heron($a, $b, $c) {
   return ((($a+$b+$c)/2)*((($a+$b+$c)/2)-$a)*((($a+$b+$c)/2)-$b)*((($a+$b+$c)/2)-$c))**0.5;
}


function heron($a, $b, $c) {
   return (4*$a*$a*$b*$b-($a*$a+$b*$b-$c*$c)**2)**.5/4;
}


function heron($a, $b, $c) {
   return 1/4 * sqrt(($a + $b +$c) * (-$a + $b + $c) * ($a -$b + $c) * ($a + $b -$c));
}


print_r(heron(3, 4, 5) . ' ' . 6);