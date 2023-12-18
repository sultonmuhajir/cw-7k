<?php
/*
|--------------------------------------------------------------------------
| Which color is the brightest?
|--------------------------------------------------------------------------
|
*/

function brightest($colors) {
   usort($colors, fn($a, $b) => strcmp(max(str_split(" $b", 2)), max(str_split(" $a", 2))));
   return current($colors);
}


function brightest(array $colors) {
   $values = array_map(fn($e) => [$e, max(str_split(" $e", 2))], $colors);
   usort($values, fn($a, $b) => strcmp($b[1], $a[1]));
   return $values[0][0];
}


function brightest( array $colors ) {
   $decColors = [];
   foreach($colors as $color){
      $decColors[$color] = max(array_map('hexdec', str_split(substr($color,1), 2)));
   }
   return array_search(max($decColors), $decColors);
}


print_r(brightest(["#001000", "#000000"]) . " #001000
");
print_r(brightest(["#ABCDEF", "#123456"]) . " #ABCDEF
");
print_r(brightest(["#00FF00", "#FFFF00"]) . " #00FF00
");
print_r(brightest(["#FFFFFF", "#1234FF"]) . " #FFFFFF
");
print_r(brightest(["#FFFFFF", "#123456", "#000000"]) . " #FFFFFF
");