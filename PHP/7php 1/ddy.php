<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #144: Distinct Digit Year
|--------------------------------------------------------------------------
|
*/

function distinctDigitYear($year) {
   $x = 0;
   while ($x != 4) {
      $year += 1;
      $arr = str_split(strval($year));
      $res = array_map(function($i) use ($arr) {
         return count(array_filter($arr, function($j) use ($i) {
            return $j == $i;
         }));
      }, $arr);
      $x = array_sum($res);
      if ($x == 4) return $year;
   }
}


function distinctDigitYear($year): int {
   return count(array_unique(str_split($year + 1))) == 4 ? $year + 1 : distinctDigitYear($year + 1);
}


function distinctDigitYear($year) {
   $year++;
   while(count(array_unique(str_split($year))) != 4) $year++;
   return $year;
}


function distinctDigitYear(int $year): int {
   return count(count_chars($year + 1, 1)) == 4 ? $year + 1 : distinctDigitYear($year + 1);
}


print_r(distinctDigitYear(1989) . ' ' . 2013 . '
');
print_r(distinctDigitYear(2013) . ' ' . 2014 . '
');