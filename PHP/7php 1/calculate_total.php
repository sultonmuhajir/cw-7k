<?php
/*
|--------------------------------------------------------------------------
| Calculate Meal Total
|--------------------------------------------------------------------------
|
*/

function calculate_total(float $subtotal, float $tax, float $tip): float {
   return number_format($subtotal + ($subtotal * ($tax / 100)) + ($subtotal * ($tip / 100)), 2);
}


function calculate_total(float $subtotal, float $tax, float $tip): float {
   return number_format($subtotal + ($subtotal/100 * ( $tax + $tip )), 2);
}


function calculate_total(float $subtotal, float $tax, float $tip): float {
   return round($subtotal * (100 + $tax + $tip) / 100, 2);
}


function calculate_total(float $subtotal, float $tax, float $tip): float {
   return number_format($subtotal*(1+($tax+$tip)/100),2);
}


print_r(calculate_total(5, 5, 10) . ' ' . 5.75 . '
');
print_r(calculate_total(36.97, 7, 15) . ' ' . 45.10 . '
');
print_r(calculate_total(0.00, 6, 18) . ' ' . 0.00 . '
');
print_r(calculate_total(80.94, 0, 20) . ' ' . 97.13 . '
');
print_r(calculate_total(54.96, 8, 0) . ' ' . 59.36 . '
');