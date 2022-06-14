<?php
/*
|--------------------------------------------------------------------------
| Square Every Digit
|--------------------------------------------------------------------------
|
*/

function square_digits($num){
   $number = str_split($num);
   $sum = '';
   foreach ($number as $i) {
      $sum .= pow($i, 2); 
   }
   return $sum;
}


function square_digits($num){
   return implode('',array_map(
      function($n){
         return $n*$n;
      },str_split($num))
   );
}


function square_digits($num){
   $n = strval($num);
   $w = '';
   for ($i=0;$i<strlen($n);$i++) {
      $w .= strval(intval($n[$i]**2));
   }
   return intval($w);
}


print_r(square_digits(3212) . ' ' . 9414 . '
');
print_r(square_digits(2112) . ' ' . 4114 . '
');
print_r(square_digits(0) . ' ' . 0 . '
');