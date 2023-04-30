<?php
/*
|--------------------------------------------------------------------------
| How Green Is My Valley?
|--------------------------------------------------------------------------
|
*/

function makeValley($a) {
	$res = [];
	rsort($a);
	for ($i=0; $i < count($a); $i++) {
      array_splice($res, ceil($i/2), 0, $a[$i]);
   }
	return $res;
}


function makeValley($a) {
   sort($a);
   $res = count($a) % 2 ? [array_shift($a)] : [];
   foreach($a as $i => $e) {
      ["array_push", "array_unshift"][$i & 1]($res, $e);
   }
   return $res;
}


function makeValley($a) {
   rsort($a);
   foreach($a as $key => $value) {
      $key&1 ? $res[count($a)-($key+1)/2] = $value : $res[$key/2] = $value;
   }
   return $a ? $res : [];
}


print_r(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
print_r(makeValley([20, 7, 6, 2]));
print_r(makeValley([14, 10, 8]));
print_r(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]));
print_r(makeValley([20, 16, 14, 10, 1]));