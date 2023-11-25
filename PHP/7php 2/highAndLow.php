<?php
/*
|--------------------------------------------------------------------------
| Highest and Lowest
|--------------------------------------------------------------------------
|
*/

function highAndLow($numbers)
{
   $arr = explode(' ', $numbers);
   return max($arr) . ' ' . min($arr);
}


function highAndLow($numbers)
{
   $arr = explode(' ',$numbers);
   sort($arr);
   return $arr[count($arr)-1]." ".$arr[0];
}


function highAndLow($numbers)
{
   $num = explode(" ",$numbers);
   $high = [];
   foreach($num as $num){
      array_push($high,$num);
   }
   sort($high);
   $result = (string)$high[count($high)-1] ." ". (string)$high[0];
   return $result;
}


print_r(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"). " 42 -9
");