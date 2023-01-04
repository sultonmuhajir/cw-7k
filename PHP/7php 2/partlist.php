<?php
/*
|--------------------------------------------------------------------------
| Parts of a list
|--------------------------------------------------------------------------
|
*/

function partlist($arr) {
   $res = [];
   for ($i = 0; $i < count($arr) - 1; $i++) {
      array_push($res, [
         implode(' ', array_slice($arr, 0, $i+1)), 
         implode(' ', array_slice($arr, $i+1, count($arr)))
      ]);
   }
   return $res;
}


function partlist($arr) {
   return array_map(function($e) use ($arr) {
      return [implode(" ", array_slice($arr, 0, $e)), 
      implode(" ", array_slice($arr, $e))];
   }, range(1, count($arr) - 1));
}


function partlist($arr) {
   $x = '';
   while(count($arr)-1){
      $x = trim($x.' '.array_shift($arr));
      $result[] = [$x,implode(' ', $arr)];
   }
   return $result;
}


print_r(partlist(["I", "wish", "Io", "hadn't", "come"]));