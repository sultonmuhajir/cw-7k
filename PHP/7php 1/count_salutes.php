<?php
/*
|--------------------------------------------------------------------------
| Count salutes
|--------------------------------------------------------------------------
|
*/

function count_salutes($hallway) {
   $res = 0; $right = 0;
   for ($i = 0; $i < strlen($hallway); $i++) {
      $char = $hallway[$i];
      if ($char == ">") $right += 1;
      elseif ($char == "<") $res += $right;
   }
   return $res * 2;
}


function count_salutes(string $hallway): int {
   $n = 0;
   $l = 0;
   for ($i = 0; $i < strlen($hallway); $i++) {
      if ($hallway[$i] == '>') $l += 1;
      if ($hallway[$i] == '<') $n += 2 * $l;
   }
   return $n;
}


function count_salutes(string $hallway): int {
   $salutes = 0;
   foreach (str_split($hallway) as $i => $c) {
      if ($c === '>') {
         $salutes += substr_count($hallway, '<', $i) * 2;
      }
   }
   return $salutes;
}


print_r(count_salutes(">--->---<--<") . ' ' . 8 . '
');
print_r(count_salutes("<----<---<-->") . ' ' . 0 . '
');
print_r(count_salutes(">-<->-<") . ' ' . 6 . '
');