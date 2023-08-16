<?php
/*
|--------------------------------------------------------------------------
| Cartesian neighbors
|--------------------------------------------------------------------------
|
*/

function cartesianNeighbor($x, $y){	
   return [
      [$x-1, $y+1], [$x, $y+1], [$x+1, $y+1],
      [$x-1, $y], [$x+1, $y],
      [$x-1, $y-1], [$x, $y-1], [$x+1, $y-1],
   ];
}


function cartesianNeighbor($x, $y){	
	$res = [];
   for($i=$x-1; $i<=$x+1; $i++)
      for($j=$y-1; $j<=$y+1; $j++)
         if($i!=$x||$j!=$y) $res[] = [$i,$j];
   return $res;
}


function cartesianNeighbor($x, $y) {
   $res = [];
   foreach (range($x - 1, $x + 1) as $a) {
      foreach (range($y - 1, $y + 1) as $b) {
         if ($x !== $a || $y !== $b) $res[] = [$a, $b];
      }
   }
   return $res;
}


print_r(cartesianNeighbor(2, 2));