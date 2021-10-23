<?php
/*
|--------------------------------------------------------------------------
| Bits Battle
|--------------------------------------------------------------------------
|
*/

function bits_battle($numbers) {
   $num = array_filter($numbers, function($i) {return $i != 0;});
   $odd = count(array_filter(str_split(implode('', array_map(function($i) {return decbin($i);}, array_filter($num, function($i) {return $i%2!=0;})))), function($i) {return $i=='1';}));
   $even = count(array_filter(str_split(implode('', array_map(function($i) {return decbin($i);}, array_filter($num, function($i) {return $i%2==0;})))), function($i) {return $i=='0';}));
   return $odd > $even ? 'odds win' : ($odd < $even ? 'evens win' : 'tie');
}


function bits_battle($n) {
   foreach ($n as $t) $f += substr_count(decbin($t), $m = $t % 2) * (.5 - $m) * !!$t;
   return $f ? ($f > 0 ? 'evens win' : 'odds win') : 'tie';
}


function bits_battle($numbers) {
   list($even, $odd) = array_reduce($numbers, function ($c, $e) {
      $c[$e % 2] += $e ? substr_count(decbin($e), $e % 2) : 0;
      return $c;
   }, [0, 0]);
   return $even > $odd ? "evens win" : ($even < $odd ? "odds win" : "tie");
}


function bits_battle($numbers) {
   $even = $odd = 0;
   foreach(array_filter($numbers) as $num){
   $bin = decbin($num);
   if($num % 2)
      $odd+=substr_count("$bin","1");
   else
      $even+=substr_count("$bin","0");  
   }
   return $even==$odd ? "tie" : ($even>$odd ? "evens win" : "odds win");
}


function bits_battle($numbers) {
   $ones = 0;
   $zeros = 0;
   foreach($numbers as $number){
      if($number){
         if($number % 2){ $ones += substr_count(decbin($number), '1'); } 
         else { $zeros += substr_count(decbin($number), '0');}  
      } 
   }
   return $ones < $zeros ? 'evens win' : ($ones == $zeros ? 'tie' : 'odds win'); 
}


print_r(bits_battle([5, 3, 14]) . ' odds win
');
print_r(bits_battle([3, 8, 22, 15, 78]) . ' evens win
');
print_r(bits_battle([]) . ' tie
');
print_r(bits_battle([1, 13, 16]) . ' tie
');