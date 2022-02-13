<?php
/*
|--------------------------------------------------------------------------
| Find the divisors!
|--------------------------------------------------------------------------
|
*/

function divisors($integer) {
   $res = [];
   for ($i=1; $i <= $integer / 2; $i++) { 
      if (fmod(($integer / $i), 1) == 0 && $i != 1) {
         array_push($res, $i);
      }
   }
   return count($res) != 0 ? $res : "{$integer} is prime";
}


function divisors(int $integer) { 
   return array_values(array_filter(range(2, $integer), fn ($n) => ($integer % $n == 0 && $n != $integer))) ?: "$integer is prime";
}


function divisors($int) {
   for($i= $int-1; $i > 1; $i--){
      if(is_int($int/$i)) $res[] = $i;
   }
   return $res ? array_reverse($res) : "$int is prime";
};


function divisors($integer) {
   $a = [];
   for ($i=2;$i<$integer;$i++){
      if ($integer%$i == 0){
         $a[] = $i;
      }
   }
   return empty($a) ? $integer . ' is prime' : $a;
}


print_r(divisors(15));
print_r(divisors(12));
print_r(divisors(25));
print_r(divisors(13));