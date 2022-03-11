<?php
/*
|--------------------------------------------------------------------------
| Product Of Maximums Of Array (Array Series #2)
|--------------------------------------------------------------------------
|
*/

function maxProduct($arr, $size) {
   rsort($arr);
   return array_product(array_splice($arr, 0, $size));
}


function maxProduct($arr, $size) {
   $res = [];
   rsort($arr);
   for($i=0; $i < $size; $i++){
      $res[] = $arr[$i];
   }
   return array_product($res);
}


function maxProduct($arr, $size) {
   rsort($arr);
   $i = 0; $res = 1;
   while ($i < $size) {
      $res *= $arr[$i];
      $i += 1;
   }
   return $res;
}


function maxProduct($arr, $size) {
   rsort($arr);
   $n = array_slice($arr, 0, $size);
   $res = 1;
   foreach($n as $item) {
      $res *= $item;
   }
   return $res;
}


print_r(maxProduct([10, 2, 3, 8, 1, 10, 4], 5) . ' ' . 9600 . '
');
print_r(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5) . ' ' . 247895375 . '
');
print_r(maxProduct([-4, -27, -15, -6, -1], 2) . ' ' . 4 . '
');