<?php
/*
|--------------------------------------------------------------------------
| Loose Change!
|--------------------------------------------------------------------------
|
*/

function changeCount($change) {
   return sprintf("$%.02f", array_sum(array_map(fn($i) => CHANGE[$i], explode(' ', $change))));
}


function changeCount($change) {
   return '$'.number_format(eval('return '.str_replace(['penny', 'nickel', 'dime', 'quarter', 'dollar',' '],[0.01, 0.05, 0.10, 0.25, 1.00, '+'],$change).';'), 2);
}


function changeCount($change) {
   $dct = ["penny" => 0.01, "nickel"=> 0.05, "dime"=> 0.10, "quarter" => 0.25, "dollar" => 1.00];
   return sprintf("$%.2f", array_reduce(explode(" ", $change), fn($x, $y) => $x + $dct[$y], 0));
}


print_r(changeCount("dime penny dollar") . " $1.11
");
print_r(changeCount("dime penny nickel") . " $0.16
");
print_r(changeCount("quarter quarter") . " $0.50
");
print_r(changeCount("dollar penny dollar") . " $2.01
");