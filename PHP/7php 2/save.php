<?php
/*
|--------------------------------------------------------------------------
| Computer problem series #1: Fill the Hard Disk Drive
|--------------------------------------------------------------------------
|
*/

function save($sizes, $hd) {
   foreach($sizes as $i => $s) {
      if($hd < $s) return $i;
      $hd -= $s;
   }
   return count($sizes);
}


function save($sizes, $hd) {
   return $sizes && $sizes[0] <= $hd ? 1 + save(array_slice($sizes, 1), $hd - $sizes[0]) : 0;
}


function save($sizes, $hd) {
   $res = 0;
   while ($hd >= 0 && $res < count($sizes)) {
      $hd -= $sizes[$res];
      $res += ($hd >= 0 ? 1 : 0);
   }
   return $res;
}


print_r(save([4, 4, 4, 3, 3], 12) . ' ' . 3 . '
');
print_r(save([4, 4, 4, 3, 3], 11) . ' ' . 2 . '
');