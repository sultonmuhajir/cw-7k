<?php
/*
|--------------------------------------------------------------------------
| Calculate mean and concatenate string
|--------------------------------------------------------------------------
|
*/

function mean($a) {
   $num = 0; $str = "";
   foreach ($a as $i) {
      str_contains('1234567890', $i) ? ($num += intval($i)) : ($str .= $i);
   }
   return [$num/10, $str];
}


function mean( array $a ) : array {
   return [array_sum( $a )/10, preg_replace("/\d+/", "", implode( '', $a ) )];
}


function mean(array $a): array {
   return [array_sum(array_filter($a, function ($e) {
      return is_numeric($e);
   })) / 10, implode(array_filter($a, function ($e) {
      return !is_numeric($e);
   }))];
}


print_r(mean(["u","6","d","1","i","w","6","s","t","4","a","6","g","1","2","w","8","o","2","0",]));