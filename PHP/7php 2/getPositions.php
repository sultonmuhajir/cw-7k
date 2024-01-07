<?php
/*
|--------------------------------------------------------------------------
| Hands Up
|--------------------------------------------------------------------------
|
*/

function getPositions($s) {
   return [$s % 3, ($s / 3 | 0) % 3, ($s / 9 | 0) % 3];
}


function getPositions($s) {
   return [$s % 3, floor($s / 3) % 3, floor($s / 9) % 3];
}


function getPositions($s) {
   return [$s % 3, intdiv($s, 3) % 3, intdiv($s, 9) % 3];
}


print_r(getPositions(54));
print_r(getPositions(98));
print_r(getPositions(3));