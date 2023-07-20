<?php
/*
|--------------------------------------------------------------------------
| Bubblesort Once
|--------------------------------------------------------------------------
|
*/

function bubblesort_once($l) {
   $res = $l;
   for ($i = 0; $i < count($res) - 1; $i++) {
      if ($res[$i] > $res[$i+1]) list($res[$i], $res[$i+1]) = array($res[$i+1], $res[$i]);
   }
   return $res;
}


function bubblesort_once($a) {
   for($i=1; $i<count($a); $i++) {
      if($a[$i-1] > $a[$i]) $a[$i-1] ^= $a[$i] ^= $a[$i-1] ^= $a[$i];
   }
   return $a; 
}


function bubblesort_once($a) {
   for ($i = 0; $i < count($a) - 1; $i++) {
      if ($a[$i] > $a[$i + 1]) list($a[$i], $a[$i + 1]) = [$a[$i + 1], $a[$i]];
   }
   return $a;
}


print_r(bubblesort_once([9, 7, 5, 3, 1, 2, 4, 6, 8]));