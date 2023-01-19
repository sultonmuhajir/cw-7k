<?php
/*
|--------------------------------------------------------------------------
| Greet Me
|--------------------------------------------------------------------------
|
*/

function greet($name) {
   return "Hello ".strtoupper($name[0]).strtolower(substr($name,1))."!";
}


function greet($name) {
   return "Hello " . mb_convert_case($name, MB_CASE_TITLE) . "!";
}


function greet($name) {
   return sprintf("Hello %s!", ucwords(strtolower($name)));
}


print_r(greet('riley') . ' Hello Riley!
');
print_r(greet('molly') . ' Hello Molly!
');
print_r(greet('BILLY') . ' Hello Billy!
');