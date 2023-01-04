<?php
/*
|--------------------------------------------------------------------------
| Frequency sequence
|--------------------------------------------------------------------------
|
*/

function freq_seq(string $s, string $sep): string {
   return implode($sep, array_map(fn($i) => count(explode($i, $s))-1, str_split($s)));
}


function freq_seq(string $s, string $sep): string {
   $res = [];
   foreach(str_split($s) as $i) {
      array_push($res, substr_count($s, $i));
   }
   return implode($sep, $res);
}


function freq_seq(string $s, string $sep): string {
   return join($sep, array_map(function($c) use ($s) {
      return substr_count($s, $c);
   }, str_split($s)));
}


print_r(freq_seq("hello world", "-") . " 1-1-3-3-2-1-1-2-1-3-1
");
print_r(freq_seq("19999999", ":") . " 1:7:7:7:7:7:7:7
");
print_r(freq_seq("^^^**$", "x") . " 3x3x3x2x2x1
");