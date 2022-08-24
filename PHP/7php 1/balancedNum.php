<?php
/*
|--------------------------------------------------------------------------
| Balanced Number (Special Numbers Series #1 )
|--------------------------------------------------------------------------
|
*/

function balancedNum($num) {
   $x = ceil(strlen(strval($num)) / 2 - 1);
   if ($x < 1) {
      return "Balanced";
   } else {
      $res = 0;
      for ($i = 0; $i < $x; $i++) {
         $res += intval(strval($num)[$i]) - intval(strrev(strval($num))[$i]);
      }
      return $res == 0 ? "Balanced" : "Not Balanced";
   }
}


function balancedNum($num) {
   $take = intval((strlen($num) - 1) / 2);
   $leftSum = array_sum(str_split(substr($num, 0, $take)));
   $rightSum = array_sum(str_split(substr($num, -$take, $take)));
   return $leftSum === $rightSum ? "Balanced" : "Not Balanced";
}


function balancedNum($num) {
   $secondhalf = substr($num, (strlen($num) / 2) + 1);
   $firsthalf = strlen($num) % 2 == 0 ? substr($num, 0, (strlen($num) / 2)-1) : $firsthalf = substr($num, 0, strlen($num) / 2);
   return array_sum(preg_split("//", $firsthalf)) == array_sum(preg_split("//", $secondhalf)) ? "Balanced" : "Not Balanced";
}


print_r(balancedNum(432) . " Not Balanced
");
print_r(balancedNum(424) . " Balanced
");
print_r(balancedNum(1024) . " Not Balanced
");
print_r(balancedNum(66545) . " Not Balanced
");
print_r(balancedNum(295591) . " Not Balanced
");
print_r(balancedNum(959) . " Balanced
");