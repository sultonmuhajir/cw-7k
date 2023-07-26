<?php
/*
|--------------------------------------------------------------------------
| TV Remote
|--------------------------------------------------------------------------
|
*/

function tvRemote($word) {
   $keys = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
   $pos = [0, 0];
   $res = 0;
   for ($i = 0; $i < strlen($word); $i++) {
      $idx = strpos($keys, $word[$i]);
      $temp = [intdiv($idx, 8), $idx % 8];
      $res += abs($temp[0] - $pos[0]) + abs($temp[1] - $pos[1]) + 1;
      $pos = $temp;
   }
   return $res;
}


function tvRemote($word) {
   $d = ['a'=>[0,0], 'b'=>[0,1], 'c'=>[0,2], 'd'=>[0,3], 'e'=>[0,4], '1'=>[0,5], '2'=>[0,6], '3'=>[0,7],
      'f'=>[1,0], 'g'=>[1,1], 'h'=>[1,2], 'i'=>[1,3], 'j'=>[1,4], '4'=>[1,5], '5'=>[1,6], '6'=>[1,7],
      'k'=>[2,0], 'l'=>[2,1], 'm'=>[2,2], 'n'=>[2,3], 'o'=>[2,4], '7'=>[2,5], '8'=>[2,6], '9'=>[2,7],
      'p'=>[3,0], 'q'=>[3,1], 'r'=>[3,2], 's'=>[3,3], 't'=>[3,4], '.'=>[3,5], '@'=>[3,6], '0'=>[3,7],
      'u'=>[4,0], 'v'=>[4,1], 'w'=>[4,2], 'x'=>[4,3], 'y'=>[4,4], 'z'=>[4,5], '_'=>[4,6], '/'=>[4,7]];
   $res =  strlen($word);
   $prev = [0,0];
   foreach(str_split($word) as $l){
      $cur = $d[$l];
      $res += abs($cur[0] - $prev[0]) + abs($cur[1] - $prev[1]);
      $prev = $cur;
   }
   return $res;
}


print_r(tvRemote("does") . ' ' . 16 . '
');
print_r(tvRemote("your") . ' ' . 23 . '
');
print_r(tvRemote("solution") . ' ' . 33 . '
');
print_r(tvRemote("work") . ' ' . 20 . '
');
print_r(tvRemote("for") . ' ' . 12 . '
');
print_r(tvRemote("these") . ' ' . 27 . '
');
print_r(tvRemote("words") . ' ' . 25 . '
');