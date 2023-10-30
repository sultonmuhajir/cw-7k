<?php
/*
|--------------------------------------------------------------------------
| Cut array into smaller parts
|--------------------------------------------------------------------------
|
*/

function makeParts($arr, $chunkSize) {
   $res = [];
   for ($i = 0; $i < count($arr); $i += $chunkSize) {
      $res[] = array_slice($arr, $i, $chunkSize);
   }
   return $res;
}


function makeParts($arr, $chunkSize){
   return array_chunk($arr, $chunkSize);
}


function makeParts($arr,$chunkSize){
   $a = [];
   $i = 0;
   while($i<count($arr)){
      $a[] = array_slice($arr,$i,$chunkSize);
      $i += $chunkSize;
   }
   return $a;  
}


print_r(makeParts([1, 2, 3, 4, 5], 2));
print_r(makeParts([1, 2, 3], 1));
print_r(makeParts([1, 2, 3, 4, 5], 10));