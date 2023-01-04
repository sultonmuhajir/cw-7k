<?php
/*
|--------------------------------------------------------------------------
| Valid Spacing
|--------------------------------------------------------------------------
|
*/

function valid_spacing($s) {
   return $s == "" || (in_array("", explode(" ", $s)) ? false : true);
}


function valid_spacing($str) {
   return !preg_match("/^ |  | $/", $str);
}


function valid_spacing($s) {
   return $s == trim($s) && !str_contains($s, "  ");
}


print_r(valid_spacing("Hello world") . ' ' . true . '
');
print_r(valid_spacing(" Hello world") . ' ' . false . '
');
print_r(valid_spacing("Hello  world ") . ' ' . false . '
');
print_r(valid_spacing("") . ' ' . true . '
');