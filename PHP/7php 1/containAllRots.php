<?php
/*
|--------------------------------------------------------------------------
| All Inclusive?
|--------------------------------------------------------------------------
|
*/

function containAllRots($s, $arr) {
   $count = 0;
   for ($i=0; $i < strlen($s); $i++) {
      if (in_array(substr($s, $i).substr($s,0,$i), $arr)) $count++;
   }
   return $count == strlen($s);
}


function containAllRots($s, $arr) {
   for ($i = 0; $i < strlen($s); $i++){
      if(array_search(substr($s, $i).substr($s, 0, $i), $arr) === false) return false;
   }
   return true;
}


function containAllRots($s, $arr) {
   foreach (str_split($s) as $char) {
      $s = substr($s, 1) . $char;
      if (!in_array($s, $arr)) return false;
   }
   return true;
}


print_r(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) . ' ' . true);