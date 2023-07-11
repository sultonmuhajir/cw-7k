<?php
/*
|--------------------------------------------------------------------------
| Correct the time-string
|--------------------------------------------------------------------------
|
*/

function timeCorrect($timestring) {
   if (empty($timestring)) return $timestring;
   $x = DateTime::createFromFormat('H:i:s', $timestring);
   return $x == false ? null :  $x->format('H:i:s');
}


function timeCorrect($timestring) {
   if ($timestring === null || $timestring === '') return $timestring;
   if (!preg_match('/^(\d\d):(\d\d):(\d\d)$/', $timestring, $match)) return null;
   return date('H:i:s', mktime($match[1], $match[2], $match[3]));
}


function timeCorrect($timestring) {
   if(!$timestring) return $timestring;
   if(preg_match("/\d{2}:\d{2}:\d{2}/",$timestring) != 1) return null;
   $parts = explode(":",$timestring);
   return gmdate("H:i:s",($parts[0] * 60 * 60) + ($parts[1] * 60) + $parts[2]);
}


print_r(timeCorrect("09:10:01") . " 09:10:01
");
print_r(timeCorrect("11:70:10") . " 12:10:10
");