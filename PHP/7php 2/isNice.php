<?php
/*
|--------------------------------------------------------------------------
| Nice Array
|--------------------------------------------------------------------------
|
*/

function isNice($arr) {
   $res = 0;
   foreach ($arr as $i) {
      if (in_array($i+1, $arr) || in_array($i-1, $arr)) $res += 1;
   }
   return count($arr) != 0 && $res == count($arr);
}


function isNice($arr) {
   foreach($arr as $i) {
      if(!(in_array($i - 1, $arr) || in_array($i + 1, $arr))) 
         return false;
   }
   return $arr ? true : false;
}


function isNice($arr) {
   foreach($arr as $n){
      if (!in_array($n-1,$arr)&&!(in_array($n+1,$arr))) return false;
   }
   return !!count($arr);
}


print_r(isNice([2, 10, 9, 3]) . ' ' . true . '
');
print_r(isNice([]) . ' ' . false . '
');