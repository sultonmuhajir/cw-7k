<?php
/*
|--------------------------------------------------------------------------
| Numbers with this digit inside
|--------------------------------------------------------------------------
|
*/

function numbersWithDigitInside($x, $d) {
   $res = [];
   for ($i=1; $i <= $x; $i++) { 
      if (strpos(strval($i), strval($d)) !== false) {
         array_push($res, $i);
      };
   }
   return count($res) == 0 ? [0,0,0] : [count($res), array_sum($res), array_product($res)];
}


function numbersWithDigitInside($x, $d) {
   return empty($a = array_filter(range(1, $x), function($v) use ($d) {
      return (strpos($v, (string)$d) !== false) ? true : false;
   })) ? [0, 0, 0] : [count($a), array_sum($a), array_product($a)];
}


function numbersWithDigitInside($x, $d) {
   $numbers = [];
   for ($i = 1; $i <= $x; $i++) {
     preg_match("/$d/", $i) ? array_push($numbers, $i) : null;
   }
   return empty($numbers) ? [0,0,0] : [count($numbers), array_sum($numbers), array_product($numbers)];
}


function numbersWithDigitInside($x, $d) {
   $res = array_filter(range(1,$x),function($item) use($d){
      return strpos($item,(string)$d) !== false;
   });
   return [count($res),array_sum($res),$res ? array_product($res) : 0];
}


print_r(numbersWithDigitInside(7, 6));
print_r(numbersWithDigitInside(5, 6));
print_r(numbersWithDigitInside(11, 1));
print_r(numbersWithDigitInside(20, 0));
print_r(numbersWithDigitInside(44, 4));