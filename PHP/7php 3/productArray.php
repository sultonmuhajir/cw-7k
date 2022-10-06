<?php
/*
|--------------------------------------------------------------------------
| Product Array (Array Series #5)
|--------------------------------------------------------------------------
|
*/

function productArray($nums) {
   return array_map(function($i) use ($nums) {
      return array_product($nums)/$i;
   }, $nums);
}


function productArray($nums) {  
   $res = array();
   foreach($nums as $num) {
      $res[] = array_product($nums) / $num;
   }
   return $res;
}


function productArray($nums) {
   for($a=0;$a<count($nums);$a++){
      $res[] = array_product($nums) / $nums[$a];
   }
   return $res;
}


print_r(productArray([3, 27, 4, 2]));