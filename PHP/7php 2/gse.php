<?php
/*
|--------------------------------------------------------------------------
| Geometric Progression Sequence
|--------------------------------------------------------------------------
|
*/

function geometric_sequence_elements($a, $r, $n) {
   $res = [];
   for ($i = 0; $i < $n; $i++) {
      array_push($res, $a);
      $a *= $r;
   }
   return implode(', ', $res);
}


function geometric_sequence_elements(int $a, int $r, int $n): string {
   return implode(", ", array_map(fn($x) => $a * pow($r, $x), range(0, $n - 1)));
}


function geometric_sequence_elements(int $a, int $r, int $n): string {
   $numbers = $a;
   while(--$n) $numbers .= ', ' . $a *= $r;
   return $numbers;
}


print_r(geometric_sequence_elements(2, 3, 5) . " 2, 6, 18, 54, 162
");
print_r(geometric_sequence_elements(2, 2, 10) . " 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
");
print_r(geometric_sequence_elements(1, -2, 10) . " 1, -2, 4, -8, 16, -32, 64, -128, 256, -512
");