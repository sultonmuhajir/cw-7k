<?php
/*
|--------------------------------------------------------------------------
| Moves in squared strings (I)
|--------------------------------------------------------------------------
|
*/

function vertMirror($s) {
   return array_map(function ($i) { return strrev($i);}, $s);
}
function horMirror($s) {
   return array_reverse($s);
}
function oper($f, $s) {
   return implode("\n", $f(explode("\n", $s)));
}


function oper($fct, $s) {
   return $fct == 'vertMirror' ? join("\n",array_map('strrev',explode("\n", $s))) : join("\n",array_reverse(explode("\n", $s)));
}


print_r(oper('vertMirror', "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx") . " EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP
");
print_r(oper('horMirror', "lVHt\nJVhv\nCSbg\nyeCt") . " yeCt\nCSbg\nJVhv\nlVHt
");