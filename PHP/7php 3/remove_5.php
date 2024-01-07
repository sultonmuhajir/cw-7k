<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #5: Remove all exclamation marks from the end of words
|--------------------------------------------------------------------------
|
*/

function remove($s) {
   return preg_replace('/!+(?=$|\s)/', '', $s);
}


function remove(string $s): string {
   $res = explode(" ", $s);
   foreach ($res as &$temp) {
     $temp = rtrim($temp, "!");
   }
   return implode(" ", $res);
}


function remove(string $s): string {
   return join(' ', array_map(fn($w) => rtrim($w,'!'),explode(' ',$s)));
}


print_r(remove("!!!Hi !!hi!!! !hi") . " !!!Hi !!hi !hi
");
print_r(remove("!!!jmo!! slvtp zsasif! bxiwn") . " !!!jmo slvtp zsasif bxiwn
");