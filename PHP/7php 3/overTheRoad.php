<?php
/*
|--------------------------------------------------------------------------
| Over The Road
|--------------------------------------------------------------------------
|
*/

function overTheRoad($address, $street){
   return $street * 2 + 1 - $address;
}


function overTheRoad($address, $street){
   return $street * 2 - --$address;
}


function overTheRoad($n, $s) {
   return ($s << 1) - --$n;
}


print_r(overTheRoad(2, 3) . ' ' . 5 . '
');
print_r(overTheRoad(3, 5) . ' ' . 8 . '
');
print_r(overTheRoad(7, 11) . ' ' . 16 . '
');