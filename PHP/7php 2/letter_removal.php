<?php
/*
|--------------------------------------------------------------------------
| Simple letter removal
|--------------------------------------------------------------------------
|
*/

function solve($s, $k) {
   $alphabet = range('a', 'z');
   $alphabetCount = count($alphabet);
   for ($i = 0; $i < $alphabetCount; $i++) {
      $val = $alphabet[$i];
      $count = 0;
      $s = preg_replace("/$val/", '', $s, $k, $count);
      $k -= $count;
   }
   return $s;
}


function solve($word, $step, $start='a'){
	return $step > 0 && !empty($word) ? solve(preg_replace("/$start/i", '', $word, $step, $count), $step-$count, chr(ord($start)+1)) : $word;
}


function solve($s, $k) {
   foreach (range('a', 'z') as $val) {
      $s = preg_replace("/$val/", '', $s, $k, $count);
      $k -= $count;
   }
   return $s;
}


print_r(solve("abracadabra", 1) . " bracadabra
");
print_r(solve("abracadabra", 2) . " brcadabra
");
print_r(solve("abracadabra", 6) . " rcdbr
");
print_r(solve("abracadabra", 8) . " rdr
");
print_r(solve("abracadabra", 50) . " 
");