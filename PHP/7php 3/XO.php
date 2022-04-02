<?php
/*
|--------------------------------------------------------------------------
| Exes and Ohs
|--------------------------------------------------------------------------
|
*/

function XO($s) {
   return strlen(str_replace('x', '', strtolower($s))) === strlen(str_replace('o', '', strtolower($s)));
}


function XO($s) {
   $str = strtolower($s);
   $x = substr_count($str, 'x');
   $o = substr_count($str, 'o');
   return $x == $o;
}


function XO( $s ) {
   if ( preg_match_all('/[xX]/i', $s ) == preg_match_all('/[oO]/i', $s ) )
      return true;
   return false;
}


function XO($s) {
   return preg_match_all('%[xo]%i', $s) == 0 || preg_match_all('%x%i', $s) == preg_match_all('%o%i', $s);
}


function XO($s) {
   $res = array_count_values(str_split(strtolower($s)));
   return $res['x'] == $res['o'] ? true : false;
}


print_r(XO('xo'). ' ' . true . '
');
print_r(XO("xxOo"). ' ' . true . '
');
print_r(XO("xxxm"). ' ' . false . '
');
print_r(XO("Oo"). ' ' . false . '
');
print_r(XO("ooom"). ' ' . false . '
');