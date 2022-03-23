<?php
/*
|--------------------------------------------------------------------------
| Special Number (Special Numbers Series #5)
|--------------------------------------------------------------------------
|
*/

function specialNumber($n) {
   $x = [0, 1, 2, 3, 4, 5];
   $num = strval($n);
   $count = 0;
   for ($i = 0; $i < strlen($num); $i++) {
      for ($j = 0; $j < count($x); $j++) {
         if ($num[$i] == $x[$j]) {
            $count++;
         }
      }
   }
   return $count == strlen($num) ? "Special!!" : "NOT!!";
}


function specialNumber($n) {
   return preg_match('/^[0-5]+$/', $n) ? "Special!!" : "NOT!!";
}


function specialNumber($n) {
   return strlen(str_replace(range(0,5), '', $n)) == 0 ? "Special!!" : "NOT!!";
}


function specialNumber(int $n): string {
   return max(str_split($n)) <= 5 ? 'Special!!' : 'NOT!!';
}


print_r(specialNumber(2) . " Special!!
");
print_r(specialNumber(55) . " Special!!
");
print_r(specialNumber(26) . " NOT!!
");
print_r(specialNumber(9) . " NOT!!
");