<?php
/*
|--------------------------------------------------------------------------
| Printer Errors
|--------------------------------------------------------------------------
|
*/

function printerError($s) {
   $count = 0;
   $x = str_split('abcdefghijklm');
   foreach (str_split($s) as $i) {
      if (!in_array($i, $x)) $count++;
   }
   return $count.'/'.strlen($s);
}


function printerError($s) {
   return preg_match_all('/[n-z]/', $s) . '/' . strlen($s);
}


function printerError($s) {
   return strlen(preg_replace('/[a-m]/i', '', $s)) . '/' . strlen($s);
}


function printerError($s) {
   return preg_match_all('/[^a-m]/', $s).'/'.strlen($s);
}


print_r(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz') . " 3/56");