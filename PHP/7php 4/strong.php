<?php
/*
|--------------------------------------------------------------------------
| Strong Number (Special Numbers Series #2)
|--------------------------------------------------------------------------
|
*/

function strong($n) {
   $res = 0;
   for ($i = 0; $i < strlen(strval($n)); $i++) {
      $fact = 1;
      for ($j = 2; $j <= intval(strval($n)[$i]); $j++) $fact *= $j;
      $res += $fact;
   }
   return $res == $n ? "STRONG!!!!" : "Not Strong !!";
}


function strong($n) : string {
   $sum = 0;
   foreach(str_split($n) as $v) {
      $sum += $v == 0 ? 1 : array_product(range(1, $v));
   }
  return $sum == $n ? 'STRONG!!!!' : 'Not Strong !!';
}


function strong($n) {
   return array_sum(array_map(function($item){
      return $item != 0 ? array_product(range(1, $item)) : 1;
   }, str_split($n))) == $n ? 'STRONG!!!!' : 'Not Strong !!';
}


print_r(strong(145) . " STRONG!!!!
");
print_r(strong(185) . " Not Strong !!
");