<?php
/*
|--------------------------------------------------------------------------
| Sum of numbers from 0 to N
|--------------------------------------------------------------------------
|
*/

function showSequence($count) {
   if ($count == 0) return "0=0";
   if ($count < 0) return "{$count}<0";
   $res = [];
   for ($i=0; $i <= $count; $i++) array_push($res, $i);
   return implode('+', $res) . ' = ' . array_sum($res);
}


class SequenceSum {
   public function showSequence($n) {
      return $n < 0 ? "$n<0" : ($n == 0 ? "0=0" : implode("+", range(0, $n)) . " = " . ($n * ($n + 1) / 2));
   }
}


class SequenceSum {
   public function showSequence($count) {
      if ($count < 0) return $count . '<0';
      if ($count == 0) return '0=0';
      return implode("+", range(0, $count)) . ' = ' . ($count * ($count + 1) / 2);
   }
}


print_r(showSequence(6) . " 0+1+2+3+4+5+6 = 21");