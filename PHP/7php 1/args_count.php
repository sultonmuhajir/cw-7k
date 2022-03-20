<?php
/*
|--------------------------------------------------------------------------
| How many arguments
|--------------------------------------------------------------------------
|
*/

function args_count() {
   return count(func_get_args());
}


function args_count (...$args){
   return count($args);
}


function args_count() {
   return func_num_args();
}


function args_count(...$args) {
   return sizeof($args);
}


print_r(args_count(1, 2) . ' ' . 2 . '
');
print_r(args_count() . ' ' . 0 . '
');
print_r(args_count('A', 'B', 'C') . ' ' . 3 . '
');