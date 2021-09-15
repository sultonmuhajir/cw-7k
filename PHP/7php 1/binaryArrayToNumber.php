<?php
/*
|--------------------------------------------------------------------------
| Ones and Zeros
|--------------------------------------------------------------------------
|
*/

function binaryArrayToNumber($arr) {
   return bindec(implode('', $arr));
}


function binaryArrayToNumber($arr) {
   $final = 0;
   for ($i = 0; $i < count($arr); $i++) {
      $final += ($arr[count($arr)-($i+1)] * (2**$i));
   }
   return $final;
}


function binaryArrayToNumber($arr) {
   return base_convert(implode($arr),2,10);
}


function binaryArrayToNumber($arr) {
   $num = 0;
   foreach($arr as $digit){
      $num *= 2;
      $num += $digit == 1;
   }
   return $num;
}


function binaryArrayToNumber(array $arr): int {
   return array_reduce($arr, function ($result, $digit) {
      return $result * 2 + $digit;
   }, 0);
}


print_r(binaryArrayToNumber([0, 0, 0, 1]). ' ' . 1 . '
');
print_r(binaryArrayToNumber([0, 0, 1, 0]). ' ' . 2 . '
');
print_r(binaryArrayToNumber([1, 1, 1, 1]). ' ' . 15 . '
');
print_r(binaryArrayToNumber([0, 1, 1, 0]). ' ' . 6 . '
');