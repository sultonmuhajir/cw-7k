<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #74: Growing Plant
|--------------------------------------------------------------------------
|
*/

function growingPlant($u, $d, $x) {
   return max(1, ceil(($x - $d) / ($u - $d)));
}


function growingPlant($upSpeed, $downSpeed, $desiredHeight) {
   $plant = 0;
   $i = 1;
   while ($plant <= $desiredHeight) {
      $plant += $upSpeed;
      if ($plant < $desiredHeight) {
         $plant -= $downSpeed;
         $i++; 
      }
   }
   return $i;
}


function growingPlant($upSpeed, $downSpeed, $desiredHeight) {
   $height = 0;
   $days = 0;
   while(true) {
      $height += $upSpeed;
      $days++;
      if($height >= $desiredHeight) return $days;
      $height-=$downSpeed; 
   }
}


function growingPlant($upSpeed, $downSpeed, $desiredHeight) {
   $h = 0;
   for ($day = 1; ; ++$day) {
      $h += $upSpeed;
      if ($h >= $desiredHeight) {
         return $day;
      }
      $h -= $downSpeed;
   }
}


print(growingPlant(100,10,910) . ' ' . 10 . '
');
print(growingPlant(10,9,4) . ' ' . 1 . '
');
print(growingPlant(5,2,0) . ' ' . 1 . '
');
print(growingPlant(5,2,5) . ' ' . 1 . '
');
print(growingPlant(5,2,6) . ' ' . 2 . '
');