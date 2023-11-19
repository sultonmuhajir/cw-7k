<?php
/*
|--------------------------------------------------------------------------
| Functions of Integers on Cartesian Plane
|--------------------------------------------------------------------------
|
*/

function sumin($n) {
   return ($n * ($n + 1) * (2 * $n + 1)) / 6;
}
function sumax($n) {
   return ($n * ($n + 1) * (4 * $n - 1)) / 6;
}
function sumsum($n) {
   return $n * $n * ($n + 1);
}


function sumin($n) {
	$sum=0;
   for($x=1; $x<=$n; $x++) {
      $sum+=(2*($n-$x)+1)*$x;
	}
	return $sum;
}
function sumax($n) {
   $sum=0;
   for($x=$n; $x>=1; $x--) {
      $sum+=(2*($x-1)+1)*$x;
	}
	return $sum;
}
function sumsum($n) {
   return sumin($n)+sumax($n);
}


print_r(sumin(5) . ' ' . 55 . '
');
print_r(sumax(8) . ' ' . 372 . '
');
print_r(sumsum(8) . ' ' . 576 . '
');
print_r(sumin(15) . ' ' . 1240 . '
');