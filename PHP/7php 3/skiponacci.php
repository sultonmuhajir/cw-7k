<?php
/*
|--------------------------------------------------------------------------
| The Skiponacci Sequence
|--------------------------------------------------------------------------
|
*/

function skiponacci($n) {
   $res = [];
   $a = 1;
   $b = 1;
   for ($i = 0; $i < $n; $i++) {
      array_push($res, $i % 2 == 0 ? $a : "skip");
      $i % 2 == 0 ? $a = $a + $b : $b = $a + $b;
   }
   return implode(" ", $res);
}


function skiponacci($n) {
   $fib = "";
   $f[0] = $f[1] = 1;
   for ($i = 0; $i <= $n-1; $i++){
      $f[$i+2] = $f[$i] + $f[$i+1];
      $fib.= ($i % 2) ? "skip " : $f[$i].' ';
   }
   return trim($fib);
}


function skiponacci($n) {
   $res = [1];
   for ($i=0, $x0=0, $x1=1; $i<$n-1; $i++) {
      $x = $x0+$x1;
      $res[] = $i%2 ? $x : 'skip';    
      $x0 = $x1;
      $x1 = $x;
   }
   return join(' ', $res);
}


print_r(skiponacci(1) . " 1
");
print_r(skiponacci(5) . " 1 skip 2 skip 5
");
print_r(skiponacci(7) . " 1 skip 2 skip 5 skip 13
");