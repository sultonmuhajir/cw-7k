<?php
/*
|--------------------------------------------------------------------------
| Resistor Color Codes
|--------------------------------------------------------------------------
|
*/

function decodeResistorColors($bands) {
   $color = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
   $x = explode(" ", $bands);
   $ohms = eval("return " . (array_search($x[0], $color) . array_search($x[1], $color) . " * 10 ** " . array_search($x[2], $color)) . ";");
   return ($ohms < 1e3 ? $ohms : ($ohms < 1e6 ? ($ohms / 1e3) . "k" : (($ohms / 1e6) . "M"))) . " ohms, " . (count($x) === 3 ? 20 : ($x[3] === "silver" ? 10 : 5)) . "%";
}


function decodeResistorColors($bands) {
   $lst = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
   $num = array_map(fn($x) => array_search($x, $lst), explode(" ", $bands));
   $val = ($num[0] * 10 + $num[1]) * pow(10, $num[2]);
   $val = $val < 1e3 ? $val : ($val < 1e6 ? $val / 1e3 . "k" : $val / 1e6 . "M"); 
   $arr = explode(" ", $bands);
   $last = end($arr);
   return "$val ohms, " . ($last == 'gold' ? 5 : ($last == 'silver' ? 10 : 20)) . "%";
}


function decodeResistorColors($bands) {
   $map = ["black" => 0, "brown" => 1, "red" => 2, "orange" => 3, "yellow" => 4, "green" => 5, 
     "blue" => 6, "violet" => 7, "gray" => 8, "white" => 9, "gold" => 5, "silver" => 10, "" => 20];
   list($a, $b, $m, $t) = array_map(function ($e) use ($map) {
      return $map[$e];
   }, explode(" ", "$bands "));
   $p = ["", "k", "M", "G"][intdiv($m + 1, 3)];
   $v = ($a * 10 + $b) * 10 ** ($m - 3 * intdiv($m + 1, 3));
   return "$v$p ohms, $t%";
}


print_r(decodeResistorColors("yellow violet black") . " 47 ohms, 20%
");
print_r(decodeResistorColors("yellow violet red gold") . " 4.7k ohms, 5%
");
print_r(decodeResistorColors("brown black green silver") . " 1M ohms, 10%
");