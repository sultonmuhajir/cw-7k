<?php
/*
|--------------------------------------------------------------------------
| Negation of a Value
|--------------------------------------------------------------------------
|
*/

function negationValue($string, $value) {
   return strlen($string) % 2 == !$value;
}


function negationValue( string $str, $val ) {
	return ! ( substr_count( $str, '!' ) % 2 ) === boolval( $val );
}


function negationValue($str, $val) {
   return strlen($str) & 1 ? !$val : (bool) $val;
}


print_r(negationValue("!", false) . ' ' . true . '
');
print_r(negationValue("!", true) . ' ' . false . '
');
print_r(negationValue("!!!", []) . ' ' . false . '
');